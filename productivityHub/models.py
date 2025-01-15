from django.contrib.auth.models import User
from django.db import models

# Create your models here.

STATUS_CHOICES = [
  ('PENDING', 'pending'),
  ('COMPLETED', 'completed'),
]

class Task(models.Model):
  STATUS_CHOICES = [
    ('PENDING', 'pending'),
    ('COMPLETED', 'completed'),
  ]
  
  user = models.ForeignKey(User, on_delete=models.CASCADE) #each task is linked to a user
  title = models.CharField(max_length=255)
  description = models.TextField(blank=True, null=True)
  deadline = models.DateTimeField(blank=True, null=True)
  status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='PENDING')
  created_at = models.DateTimeField(auto_now_add=True)

def __str__(self):
  return self.title