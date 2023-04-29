from rest_framework.serializers import ModelSerializer

from api.models import (
    User, 
    Team,
    Student,
    Competitor,
)

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "password", "first_name", "last_name", "school", "role", "gender"]

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        instance.username = validated_data['email']
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
 
class CompetitorSerializer(ModelSerializer):
    class Meta:
        model = Competitor
        fields = ["email", "password", "first_name", "last_name", "school", "role", "gender"]

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        instance.username = validated_data['email']
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


