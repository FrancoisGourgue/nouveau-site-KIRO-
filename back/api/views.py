from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint' : '/users/',
            'method': 'GET',
            'body': None,
            'description': ''
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getUsers(request):
    members = [
        [{
        'name': 'allo'
        },
        {
        'name':'allo'
        }]
    ]
    return Response(members)

