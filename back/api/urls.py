from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("users", views.getUsers),
    path("student/register", views.registerStudent),
    path("teacher/register", views.registerTeacher),
    path("user/login", views.login),
    path("team/register", views.registerTeam),
    path("team/addstudent", views.addStudentToTeam),
]
