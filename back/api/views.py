import jwt
import datetime

from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.exceptions import AuthenticationFailed
from api.serializer import UserSerializer
from api.models import User

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            "Endpoint": "/competitor/register/",
            "method": "POST",
            "description": "To register a competitor",
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
            "Endpoint": "/user/login",
            "method": "POST",
            "description": "To login",
            "Format of the request:": {
                "email": "<your email>",
                "password": "<your password>",
            },
        },
    ]
    return Response(routes)


@api_view(['POST'])
def registerUser(request):
    user = UserSerializer(data=request.data)
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

