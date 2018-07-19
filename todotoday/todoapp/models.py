from django.db import models
from django.utils import timezone
#from django.contrib.auth.models import User

# Create your models here.

class TodoList(models.Model):
    text = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text

class Task(models.Model):
    """Defines the attributes of a task from a todo list"""
    # assigned_to = models.ForeignKey(User,
    #                                 models.SET_NULL,
    #                                 blank=True,
    #                                 null=True,
    #                                 default='',
    #                                 related_name="assigned_task",
    #                                 related_query_name='assigned_tasks',
    #                                 verbose_name='Assigned to')
    # created_by  = models.ForeignKey(User,
    #                                 blank=True,
    #                                 null=True,
    #                                 on_delete=models.CASCADE,
    #                                 related_name='created_task',
    #                                 related_query_name='created_tasks',
    #                                 verbose_name='Created by')
    todolist = models.ForeignKey(TodoList, on_delete=models.CASCADE)
    text = models.CharField(max_length=200)
    is_completed = models.BooleanField(default=False)
    due_date = models.DateField('Due Date', blank=True, null=True)
    completed_date = models.DateTimeField('Completed Date', blank=True, null= True)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.text