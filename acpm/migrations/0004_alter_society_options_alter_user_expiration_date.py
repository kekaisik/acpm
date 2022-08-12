# Generated by Django 4.0.6 on 2022-08-10 15:27

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('acpm', '0003_alter_education_en_title_alter_education_kz_title_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='society',
            options={'verbose_name': 'Общество', 'verbose_name_plural': 'Общество'},
        ),
        migrations.AlterField(
            model_name='user',
            name='expiration_date',
            field=models.DateField(blank=True, default=datetime.datetime(2022, 8, 10, 15, 27, 55, 837922, tzinfo=utc), verbose_name='Подписка действительна до'),
        ),
    ]
