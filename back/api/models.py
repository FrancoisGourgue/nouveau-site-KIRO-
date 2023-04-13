from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

class User(AbstractUser):
    class School(models.TextChoices):
        

    email = models.CharField(blank=False, max_length=255, unique=True)
    password = models.CharField(blank=False, max_length=255)
    first_name = models.CharField(blank=False, max_length=255)
    last_name = models.CharField(blank = False, max_length=255)
    ecole = models.CharField(max_length=255)
    gender = models.CharField()

# Etudiant qui suit le cours d'optimisation
class Student(User):

#Admin/Prof du cours
class Teacher(User):


class Team(models.Model):
    name = models.CharField()
    id = models.IntegerField()
    score = models.IntegerField()
    members = models.ManyTooManyField(Student, )
    solution = models.ManyTooManyField()

class Membership(models.Model):
