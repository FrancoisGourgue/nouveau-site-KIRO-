from django.contrib import admin
from api.models import User, Team, Student, Teacher
# Register your models here.

admin.site.register(User)
admin.site.register(Student)
admin.site.register(Teacher)
admin.site.register(Team)
