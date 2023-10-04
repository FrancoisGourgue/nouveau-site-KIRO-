from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, get_list_or_404, redirect
from django.urls import reverse
from django.contrib import auth
from django.contrib.auth import update_session_auth_hash

from api.models import User, Team, Student


def accueil(request):
    if request.method == "GET":
        return render(request, "profile/accueil.html")


def leaderboard(request):
    if request.method == "GET":
        return render(request, "profile/leaderboard.html")


def register_view(request):
    if request.method == "POST":
        # TODO Datavalidation
        student = Student(
            username=request.POST["email"],
            email=request.POST["email"],
            phone_number=request.POST["phone-number"],
            first_name=request.POST["first-name"],
            last_name=request.POST["last-name"],
            school=request.POST["school"],
            gender=request.POST["gender"],
            school_year=request.POST["year"],
        )
        student.set_password(request.POST["password"])
        student.save()
    else:
        return render(request, "registration/register.html")


@login_required
def team_register(request):
    email = request.user.email
    student = get_object_or_404(Student, email=email)
    context = {
        "student": student,
    }
    # TODO empecher student qui a déjà team d'en créer une nouvelle
    if request.method == "POST":
        if "Annuler" in request.POST:
            return redirect(reverse(profile))
        if request.POST["name"] != "":
            name = request.POST["name"]
        else:
            name = "Equipe de " + student.first_name + " " + student.last_name
        team = Team(
            name=name,
            type=request.POST["type"],
            creator=student.email
        )
        team.save()
        student.team = team
        student.save()
        return redirect(reverse(profile))
    else:
        return render(request, "profile/team_register.html", context)


def teams_list(request):
    teams = Team.objects.order_by("name")
    context = {
        "teams": teams,
    }
    return render(request, "profile/teams_list.html", context)


@login_required
def team(request):
    # renvoie l'user vers la page de son équipe ou de création d'équipe
    email = request.user.email
    try:
        student = get_object_or_404(Student, email=email)
        team_name = student.team
        if student.team is not None:
            return team_viewer(request, team_name)
        else:
            context = {
                "no_team": True,
            }
            return render(request, "profile/team_member.html", context)
    except Student.DoesNotExist:
        # if user is teacher
        pass


def team_viewer(request, team_name):
    team_request = get_object_or_404(Team, name=team_name)
    students = get_list_or_404(Student, team=team_request)  # à modifier: seul le premier student de la liste a les perms pour édit la team et non pas le créateur de la team
    if request.user.is_authenticated:
        if team_request.creator == request.user.email:
            return team_creator(request)
        for student in students:
            if request.user.email == student.email:
                return team_member(request)
    members = team_request.members.all()
    context = {
        "team": team_request,
        "members": members,
    }
    return render(request, "profile/team_viewer.html", context)


@login_required
def team_member(request):
    try:
        student = get_object_or_404(Student, email=request.user.email)
        team_request = get_object_or_404(Team, name=student.team.name)
        members = team_request.members.all()
        context = {
            "team": team_request,
            "members": members,
        }
        if request.method == "POST":
            if "leave_team" in request.POST:
                student.team = None
                student.save()
            return redirect(accueil)
        return render(request, "profile/team_member.html", context)
    except Student.DoesNotExist:
        # if user is a teacher
        pass


@login_required
def team_creator(request):
    try:
        student = get_object_or_404(Student, email=request.user.email)
        team_request = get_object_or_404(Team, name=student.team.name)
        members = team_request.members.all()
        context = {
            "team": team_request,
            "members": members,
        }
        if request.method == "POST":
            if "edit_team" in request.POST:
                return render(request, "profile/team_edit.html", context)
            if "leave_team" in request.POST:
                # à modifier pour que la team disparaisse si vide ou que le rôle de créateur soit légué
                student.team = None
                student.save()
                return redirect(accueil)
        return render(request, "profile/team_creator.html", context)
    except Student.DoesNotExist:
        # if user is a teacher
        pass
    

@login_required
def profile(request):
    email = request.user.email
    try:
        student = Student.objects.get(email=email)
        context = {
            "student": student,
        }
        return render(request, "profile/profile_student.html", context)
    except Student.DoesNotExist:
        user = User.objects.get(email=email)
        context = {
            "user": user,
        }
        return render(request, "profile/profile_user.html", context)


@login_required
def profile_edit(request):
    email = request.user.email
    student = get_object_or_404(User, email=email)
    context = {"student": student}
    if request.method == "POST":
        if "Annuler" in request.POST:
            return redirect(reverse(profile))
        student.first_name = request.POST["first_name"]
        student.last_name = request.POST["last_name"]
        student.phone_number = request.POST["phone_number"]
        student.email = request.POST["email"]
        student.save()
        return redirect(reverse(profile))
    else:
        return render(request, "profile/profile_edit.html", context)


@login_required
def profile_password(request):
    email = request.user.email
    student = get_object_or_404(User, email=email)
    context = {"student": student}
    if request.method == "POST":
        if "Annuler" in request.POST:
            return redirect(reverse(profile))
        if not auth.authenticate(username=email, password=request.POST["old_password"]):
            context["old_password_error"] = True
            print("erreur 1")
            return render(request, "profile/password.html", context)
        if request.POST["new_password_1"] != request.POST["new_password_2"]:
            context["new_password_error"] = True
            print("erreur 2")
            return render(request, "profile/password.html", context)
        student.set_password(request.POST["new_password_1"])
        student.save()
        update_session_auth_hash(request, student)
        return redirect(reverse(profile))
    else:
        return render(request, "profile/password.html", context)