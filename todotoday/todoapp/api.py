from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response

from knox.models import AuthToken

from .models import TodoList, Task
from .serializers import ListSerializer, TaskSerializer, UserSerializer


class ListViewSet(viewsets.ModelViewSet):
    queryset = TodoList.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ListSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = TaskSerializer

class RegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })