from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('users/', views.getUsers),
    path('competitor/register/', views.registerUser),
    path('user/login', views.login),

]

