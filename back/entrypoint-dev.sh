#!/bin/sh

echo "Creating media files..."
mkdir -p media/

echo "Waiting for postgres..."

while ! nc -z $DB_HOST $DB_PORT; do
    sleep 0.1
done

echo "PostgreSQL started"

echo "Migrating..."
python3 manage.py makemigrations
python3 manage.py migrate --noinput

echo "Starting redis server..."
redis-server 1>/dev/null 2>&1 &

echo "Starting celery..."
celery -A back worker --loglevel=info --logfile=/var/log/celery.log --detach

exec "$@"