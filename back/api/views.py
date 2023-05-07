import jwt
import datetime

from django.shortcuts import render
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

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            "Endpoint": "/student/register",
            "method": "POST",
            "description": "To register a student",
            "Format of the request:": {
                "email": "<your email>",
                "password": "<your password>",
                "first_name": "<your first_name>",
                "last_name": "<your last_name>",
                "school": "<your school>",
                "gender": "<your gender>",
            },
        },
        {
            "Endpoint": "/teacher/register",
            "method": "POST",
            "description": "To register a teacher",
            "Format of the request:": {
                "email": "<your email>",
                "password": "<your password>",
                "first_name": "<your first_name>",
                "last_name": "<your last_name>",
                "gender": "<your gender>",
            },
        },
        {
            "Endpoint": "/user/login",
            "method": "POST",
            "description": "To login",
            "Format of the request:": {
                "email": "<your email>",
                "password": "<your password>",
            },
        },
        {
            "Endpoint": "/team/register",
            "method": "POST",
            "description": "To register a team",
            "Format of the request:": {
                "name": "<team name>",
            },
        },
        {
            "Endpoint": "/team/addstudent",
            "method": "POST",
            "description": "Add a student to a team",
            "Format of the request:": {
                "team": "<team name>",
                "student": "<student's email address>",
            },
        },
        {
            "Endpoint": "/team/getscore",
            "method": "GET",
            "description": "Get team's score",
            "Format of the request:": {
                "team": "<team name>",
            },
        },
        {
            "Endpoint": "/team/getscoreupdates",
            "method": "GET",
            "description": "Get team's score updates",
            "Format of the request:": {
                "team": "<team name>",
            },
        },
        {
            "Endpoint": "/team/invite",
            "method": "POST",
            "description": "Create an invitation",
            "Format of the request:": {
                "team": "<team name>",
                "student": "<student's email address>",
            },
        }
    ]
    return Response(routes)


@api_view(['POST'])
def registerStudent(request):
    userSerializer = StudentSerializer(data=request.data)
    userSerializer.is_valid(raise_exception=True)
    userSerializer.save()
    return Response(userSerializer.data)

@api_view(['POST'])
def registerTeacher(request):
    user = TeacherSerializer(data=request.data)
    user.is_valid(raise_exception=True)
    user.save()
    return Response(user.data)

@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()[0]   
    serializer = UserSerializer(users)
    return Response(serializer.data)

@api_view(['POST'])
def login(request):
    mail = request.data['email']
    password = request.data['password']

    try:
        user = User.objects.get(email = mail)
    except ObjectDoesNotExist:
        raise AuthenticationFailed("User not found")
    if not user.check_password(password):
        raise AuthenticationFailed("Wrong password")
    payload = {
        "id": user.id,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(120),
        "iat": datetime.datetime.utcnow()
    }

    token = jwt.encode(payload, "secret", algorithm="HS256")
    response = Response()
    response.set_cookie(key="jwt", value=token, httponly=True)
    response.data = {"jwt": token}
    return response

@api_view(['POST'])
def registerTeam(request):
    team = TeamSerializer(data=request.data)
    team.is_valid(raise_exception=True)
    team.save()
    return Response(team.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addStudentToTeam(request):
    try:
        team = Team.objects.get(name = request.data['team'])
    except ObjectDoesNotExist:
        raise AuthenticationFailed("Team not found")
    try:
        user = Student.objects.get(email = request.data['student'])
    except ObjectDoesNotExist:
        raise AuthenticationFailed("User not found")
    
    user.team = team
    user.save()
    response = Response()
    response.data = {"student": user.email, "team": team.name}
    return response
    