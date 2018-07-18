from rest_framework import serializers

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