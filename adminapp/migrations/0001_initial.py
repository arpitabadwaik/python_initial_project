# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SaveData',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('bill_month', models.CharField(max_length=50, null=True, blank=True)),
                ('sub_division', models.CharField(max_length=50, null=True, blank=True)),
                ('cycle', models.CharField(max_length=50, null=True, blank=True)),
                ('reading_start_date', models.CharField(max_length=50, null=True, blank=True)),
                ('reading_end_date', models.CharField(max_length=50, null=True, blank=True)),
                ('validation_start_date', models.CharField(max_length=50, null=True, blank=True)),
                ('validation_end_date', models.CharField(max_length=50, null=True, blank=True)),
                ('punching_start_date', models.CharField(max_length=50, null=True, blank=True)),
                ('punching_end_date', models.CharField(max_length=50, null=True, blank=True)),
                ('pre_audit_date', models.CharField(max_length=50, null=True, blank=True)),
                ('bill_generation_date', models.CharField(max_length=50, null=True, blank=True)),
                ('bill_printing_start_date', models.CharField(max_length=50, null=True, blank=True)),
                ('bill_printing_end_date', models.CharField(max_length=50, null=True, blank=True)),
                ('bill_distribution_start_date', models.CharField(max_length=50, null=True, blank=True)),
                ('bill_distribution_end_date', models.CharField(max_length=50, null=True, blank=True)),
                ('incentive_date', models.CharField(max_length=50, null=True, blank=True)),
                ('due_date', models.CharField(max_length=50, null=True, blank=True)),
            ],
        ),
    ]
