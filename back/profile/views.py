import jwt
import datetime


from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect
from django.core.exceptions import ObjectDoesNotExist
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
    student=get_object_or_404(Student,email=email)
    context={
        "student": student,
    }      
    """if request.method=='POST':
        if "Annuler" in request.POST:
            return redirect("social:profile")
        elif "Valider" in request.POST:
            form=EditProfile(
                request.POST,
                request.FILES,
                instance=Student.objects.get(user=request.user),
            )
            if form.is_valid():
                form.save()
                return redirect("social:profile")
        else:
            form=EditProfile()
            form.fields["phone_number"].initial=student.phone_number
            form.fields[]
        context["EditProfile"]=form"""
    return render(request, "profile/profile_edit.html", context)


@login_required
def team(request):
    team_request=get_object_or_404(Team,name=request.user.team.name)
    context={
        "team": team_request,
    }
    print(request.user.role)
    return render(request,"profile/team.html")
    
    