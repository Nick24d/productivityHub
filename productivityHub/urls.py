from django.contrib.auth.views import LoginView
from django.urls import path

from . import views

urlpatterns = [
    path('', views.login_view, name='login'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('signup/', views.signup, name='signup'),
    path('tasks/', views.task_list, name='task-list'),
    path('tasks/add/', views.add_task, name='add_task'),
    path('tasks/complete/<int:task_id>/', views.complete_task, name='complete_task'),
]
