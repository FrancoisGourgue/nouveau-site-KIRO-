from django.shortcuts import render

from api.models import (
    Student,
)

def register_view(request):
    if request.method == "POST":
        #TODO Datavalidation
        student = Student(username = request.POST["email"], email = request.POST["email"], phone_number = request.POST['phone-number'], first_name = request.POST["first-name"], last_name = request.POST["last-name"], school = request.POST["school"], gender=request.POST["gender"], school_year = request.POST["year"])
        student.set_password(request.POST["password"])
        student.save()
    else:
        return render(request, "registration/register.html")
