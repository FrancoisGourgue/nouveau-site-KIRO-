from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

class Team(models.Model):
    class Type(models.TextChoices):
        FIRST_YEAR = "1A Ponts",
        KIRO = "Participant Kiro",
        RO = "Cours de RO"

    name = models.CharField()
    score = models.IntegerField()

class Solution(models.Model):
    date = models.DateField()
    global_score = models.IntegerField()
    score_1 = models.IntegerField()
    score_2 = models.IntegerField()
    score_3 = models.IntegerField()
    team = models.ForeignKey(Team, on_delete=models.PROTECT)
    
class User(AbstractUser):
    class Role(models.TextChoices):
        TEACHER = "Professeur",
        STUDENT = "Étudiant",
        COMPETITOR = "Compétiteur"

    class School(models.TextChoices):
        OTHER = "Autre",
        CS = "Centrale Supélec",
        X = "École polytechnique"
        ENPC = "École des Ponts",
        ENPC1A = "École des Ponts 1A"
    
    class Gender(models.TextChoices):
        MALE = "Homme",
        FEMALE = "Femme",
        OTHER = "Autre"
        
    email = models.CharField(blank=False, max_length=255, unique=True)
    password = models.CharField(blank=False, max_length=255)
    first_name = models.CharField(blank=False, max_length=255)
    last_name = models.CharField(blank = False, max_length=255)
    school = models.CharField(choices = School.choices, default=School.OTHER)
    role = models.CharField(choices = Role.choices, default=Role.COMPETITOR)
    gender = models.CharField(choices = Gender.choices, default=Gender.OTHER)

class Student(User):
    role = User.Role.STUDENT
    team = models.ForeignKey(Team, on_delete=models.PROTECT)


class Competitor(User):
    role = User.Role.COMPETITOR
    team = models.ForeignKey(Team, on_delete=models.PROTECT)