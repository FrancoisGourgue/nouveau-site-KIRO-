# Generated by Django 4.2 on 2023-04-29 19:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='team',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.team'),
        ),
    ]
