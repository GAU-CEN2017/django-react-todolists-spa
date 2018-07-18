from rest_framework import viewsets, permissions

from .models import TodoList, Task
from .serializers import ListSerializer, TaskSerializer


class ListViewSet(viewsets.ModelViewSet):
    queryset = TodoList.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ListSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = TaskSerializer