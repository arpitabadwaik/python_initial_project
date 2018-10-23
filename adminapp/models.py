from django.db import models


# Create your models here.
# Table for saving data
class SaveData(models.Model):
    bill_month = models.CharField(max_length=50, blank=True, null=True)
    sub_division = models.CharField(max_length=50, blank=True, null=True)
    cycle = models.CharField(max_length=50, blank=True, null=True)
    reading_start_date = models.CharField(max_length=50, blank=True, null=True)
    reading_end_date = models.CharField(max_length=50, blank=True, null=True)
    validation_start_date = models.CharField(max_length=50, blank=True, null=True)
    validation_end_date = models.CharField(max_length=50, blank=True, null=True)
    punching_start_date = models.CharField(max_length=50, blank=True, null=True)
    punching_end_date = models.CharField(max_length=50, blank=True, null=True)
    pre_audit_date = models.CharField(max_length=50, blank=True, null=True)
    bill_generation_date = models.CharField(max_length=50, blank=True, null=True)
    bill_printing_start_date = models.CharField(max_length=50, blank=True, null=True)
    bill_printing_end_date = models.CharField(max_length=50, blank=True, null=True)
    bill_distribution_start_date = models.CharField(max_length=50, blank=True, null=True)
    bill_distribution_end_date = models.CharField(max_length=50, blank=True, null=True)
    incentive_date = models.CharField(max_length=50, blank=True, null=True)
    due_date = models.CharField(max_length=50, blank=True, null=True)

    def __unicode__(self):
        return unicode(self.cycle)
