# Generated by Django 4.0.6 on 2022-08-10 14:44

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('acpm', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='expiration_date',
            field=models.DateField(blank=True, default=datetime.datetime(2022, 8, 10, 14, 44, 7, 949103, tzinfo=utc), verbose_name='Подписка действительна до'),
        ),
    ]