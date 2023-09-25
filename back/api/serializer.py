from rest_framework.serializers import ModelSerializer

from api.models import (
    User,
    Team,
    Student,
    Teacher,
)


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            "email",
            "password",
            "first_name",
            "last_name",
            "school",
            "role",
            "gender",
        ]

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        instance.username = validated_data["email"]
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        fields = [
            "email",
            "password",
            "first_name",
            "last_name",
            "school",
            "role",
            "gender",
            "team",
        ]

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        instance.username = validated_data["email"]
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class TeacherSerializer(ModelSerializer):
    class Meta:
        model = Teacher
        fields = ["email", "password", "first_name", "last_name", "role", "gender"]

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        instance.username = validated_data["email"]
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class TeamSerializer(ModelSerializer):
    class Meta:
        model = Team
        fields = ["name", "type", "score"]
