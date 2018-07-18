from django.conf.urls import include, url
from rest_framework import routers

from .api import ListViewSet, TaskViewSet

router = routers.DefaultRouter()
router.register('lists', ListViewSet)
router.register('tasks', TaskViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]