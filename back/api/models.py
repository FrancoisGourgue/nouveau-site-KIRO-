from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
    
class User(AbstractUser):
    class Role(models.TextChoices):
        TEACHER = "Professeur",
        STUDENT = "Étudiant",

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
    role = models.CharField(max_length=255, choices = Role.choices, default=Role.STUDENT)
    gender = models.CharField(max_length=255, choices = Gender.choices, default=Gender.OTHER)

class Team(models.Model):
    class Type(models.TextChoices):
        FIRST_YEAR = "1A Ponts",
        KIRO = "Participant Kiro",
        RO = "Cours de RO"

    name = models.CharField(max_length=100, unique=True, blank=False, primary_key=True)
    type = models.CharField(max_length=100, choices=Type.choices, default=Type.KIRO)
    score = models.IntegerField(default=1000)

    def getMembers(self):
        members = Student.objects.get(team=self.name)
        return members

class Solution(models.Model):
    date = models.DateField()
    global_score = models.IntegerField()
    score_1 = models.IntegerField()
    score_2 = models.IntegerField()
    score_3 = models.IntegerField()
    team = models.ForeignKey(Team, on_delete=models.PROTECT)

class Student(User):
    team = models.ForeignKey(Team, on_delete=models.PROTECT)
    role = User.Role.STUDENT
    school = models.CharField(max_length=255, choices = User.School.choices, default=User.School.OTHER)

class Teacher(User):
    role = User.Role.TEACHER