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
def index_profile(request):
    return render(request, 'index_profile.html')