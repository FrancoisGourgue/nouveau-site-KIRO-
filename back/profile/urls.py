from django.urls import path
from .views import (
    team, profile, profile_edit, accueil, leaderboard, teams_list,
)
from api.views import (
    registerStudent,
)

general_endpoints = [
    path('', accueil),
    path('leaderboard', leaderboard),
    path('teamslist', teams_list),
]
"""
    path('subject', Subject),"""
    
team_endpoints = [
    path('team', team),
    

]
"""
    path('team/create', registerTeam),
    path('team/edit', teamEdit),"""    
    
personal_endpoints = [
    path('student/register', registerStudent),
    path('profile', profile),     
    path('profile/edit', profile_edit),    
]
"""path('student/login', loginStudent),""" 

urlpatterns = (
    general_endpoints
    + team_endpoints
    + personal_endpoints
)
