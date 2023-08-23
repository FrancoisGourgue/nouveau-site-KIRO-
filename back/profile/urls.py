from django.urls import path
from profile.views import (
    index_profile,
)

urlpatterns = [
    path('', index_profile),
]

