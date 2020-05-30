
from django.db import models


class Answers(models.Model):
    id = models.IntegerField(primary_key=True)
    c = models.ForeignKey('Contro', models.DO_NOTHING, blank=True, null=True)
    u = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True)
    answer = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Answers'


class Contro(models.Model):
    contro_id = models.IntegerField(primary_key=True)
    contro_name = models.CharField(max_length=150, blank=True, null=True)
    nb_yes = models.IntegerField(blank=True, null=True)
    nb_no = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Contro'


class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    device_id = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'User'

