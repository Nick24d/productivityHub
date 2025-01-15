from django import forms
from .models import Task

#create your form

class TaskForm(forms.ModelForm):
  class Meta:
    model = Task
    fields = ['title', 'description', 'deadline']
    widgets = {'deadline': forms.DateInput(attrs={'type': 'datetime-local'})
    }
    error_messages = {
        'title': {'required': 'Please enter a title for the task.'},
        'description': {'required': 'Please provide a description.'},
        'deadline': {'required': 'Please select a deadline.'}
    }