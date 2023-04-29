from django.contrib import admin
from api.models import User, Team, Student
# Register your models here.

admin.site.register(User)
admin.site.register(Student)
admin.site.register(Team)