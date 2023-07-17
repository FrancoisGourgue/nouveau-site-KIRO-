# Generated by Django 4.1.2 on 2023-07-17 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_student_school_alter_student_team'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='school_year',
            field=models.TextField(default='BAC+1', max_length=7),
        ),
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.TextField(default='0000000000', max_length=12),
        ),
    ]
