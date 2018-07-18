from rest_framework import serializers
from django.contrib.auth.models import User

from .models import TodoList
from .models import Task


class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoList
        fields = ('id', 'text', )

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')
        extra_kwargs = {'password': {'write-only': True}}

        def create(self, validated_data):
            user = User.objects.create_user(validated_data['username'],
                                            None,
                                            validated_data['password'])
            return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')