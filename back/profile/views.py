import jwt
import datetime


from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect
from django.core.exceptions import ObjectDoesNotExist
from django.urls import reverse
from django.contrib import auth
from django.contrib.auth import update_session_auth_hash
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import AuthenticationFailed
from api.serializer import (
    UserSerializer, TeamSerializer, StudentSerializer, TeacherSerializer
)
from api.models import User, Team, Student

# Create your views here.

def accueil(request):
    if request.method == 'GET':
        return render(request, "profile/accueil.html")

@login_required
def leaderboard(request):
    if request.method == 'GET':
        return render(request, "profile/leaderboard.html")

def register_view(request):
    if request.method == "POST":
        #TODO Datavalidation
        student = Student(
            username = request.POST["email"], 
            email = request.POST["email"], 
            phone_number = request.POST['phone-number'], 
            first_name = request.POST["first-name"], 
            last_name = request.POST["last-name"], 
            school = request.POST["school"], 
            gender=request.POST["gender"], 
            school_year = request.POST["year"])
        student.set_password(request.POST["password"])
        student.save()
    else:
        return render(request, "registration/register.html")

@login_required    
def team_register(request):
    email=request.user.email
    student=get_object_or_404(User, email=email)
    #TODO empecher student qui a déjà team d'en créer une nouvelle
    if request.method == "POST":
        if "Annuler" in request.POST:
            return redirect(reverse(profile))
        team = Team(
            name=request.POST["name"],
            type=request.POST["type"],
        )
        team.save()
        student.team=team
        student.save()
        return redirect(reverse(profile))
    else:
        return render(request, "profile/team_register.html")

@login_required
def teams_list(request):
    teams=Team.objects.order_by("name")
    context={
        "teams":teams,
    }
    return render(request,"profile/teams_list.html",context)

@login_required
def team(request, team_id=None):
    if team_id==None:
        team_id=request.user.team
    team=get_object_or_404(Team, team__pk=team_id)
    context={
        "team": team,
    }
    return render(request,"team.html",context)

@login_required
def profile(request):
    email=request.user.email
    student=get_object_or_404(User, email=email)
    context={
        "student": student,
    }  
    return render(request,"profile/profile.html",context)


@login_required
def profile_edit(request):
    email=request.user.email
    student=get_object_or_404(User,email=email)
    context={
        "student": student
    }
    if request.method=="POST":
        if "Annuler" in request.POST:
            return redirect(reverse(profile))
        student.first_name = request.POST["first_name"]
        student.last_name = request.POST["last_name"] 
        student.phone_number = request.POST["phone_number"]
        student.email = request.POST["email"]    
        student.save()
        return redirect(reverse(profile))
    else:
        return render(request, "profile/profile_edit.html", context)

@login_required
def profile_password(request):
    email=request.user.email
    student=get_object_or_404(User,email=email)
    context={
        "student": student
    }
    if request.method=="POST":
        if "Annuler" in request.POST:
            return redirect(reverse(profile))
        if not auth.authenticate(username=email, password=request.POST["old_password"]):
            context["old_password_error"]=True
            print("erreur 1")
            return render(request, "profile/password.html", context)
        if request.POST["new_password_1"]!=request.POST["new_password_2"]:
            context["new_password_error"]=True
            print("erreur 2")
            return render(request, "profile/password.html", context)
        student.set_password(request.POST["new_password_1"])
        student.save()
        update_session_auth_hash(request, student)
        return redirect(reverse(profile))
    else:
        return render(request, "profile/password.html", context)
        
@login_required
def team(request):
    team_request=get_object_or_404(Team,name=request.user.team.name)
    context={
        "team": team_request,
    }
    return render(request,"profile/team.html")
    
    