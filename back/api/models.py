from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager


class User(AbstractUser):
    class Meta:
        db_table = "Users"

    class Role(models.TextChoices):
        TEACHER = ("Professeur",)
        STUDENT = ("Étudiant",)

    class Gender(models.TextChoices):
        MALE = ("Homme",)
        FEMALE = ("Femme",)
        OTHER = "Autre"

    email = models.CharField(blank=False, max_length=255, unique=True)
    password = models.CharField(blank=False, max_length=255)
    first_name = models.CharField(blank=False, max_length=255)
    last_name = models.CharField(blank=False, max_length=255)
    role = models.CharField(max_length=255, choices=Role.choices, default=Role.STUDENT)
    gender = models.CharField(
        max_length=255, choices=Gender.choices, default=Gender.OTHER
    )
    phone_number = models.TextField(max_length=12, default="0000000000")
    
    def __str__(self):
        return self.first_name + " " + self.last_name


class Team(models.Model):
    class Type(models.TextChoices):
        FIRST_YEAR = ("1A Ponts",)
        KIRO = ("Participant Kiro",)
        RO = "Cours de RO"

    name = models.CharField(max_length=100, unique=True, blank=False, primary_key=True)
    type = models.CharField(max_length=100, choices=Type.choices, default=Type.KIRO)
    score = models.IntegerField(default=1000)
    """creator = models.CharField(blank=False, max_length=255, unique=True)"""

    def __str__(self):
        return self.name


class Solution(models.Model):
    date = models.DateField()
    global_score = models.IntegerField()
    score_1 = models.IntegerField()
    score_2 = models.IntegerField()
    score_3 = models.IntegerField()
    team = models.ForeignKey(Team, on_delete=models.PROTECT)


class Student(User):
    class Meta:
        db_table = "Students"

    team = models.ForeignKey(Team, on_delete=models.PROTECT, related_name='members', default=None, null=True)
    role = User.Role.STUDENT
    school = models.TextField(max_length=255)
    school_year = models.TextField(max_length=7, default="BAC+1")


class Teacher(User):
    class Meta:
        db_table = "Teachers"

    role = User.Role.TEACHER


class Invitation(models.Model):
    team = models.ForeignKey(Team, on_delete=models.PROTECT)
    student = models.CharField(max_length=255)
