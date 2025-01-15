from django import forms
from .models import Task

#create your form

class TaskForm(forms.ModelForm):
  class Meta:
    model = Task
    fields = ['title', 'description', 'deadline']
    widgets = {'deadline': forms.DateInput(attrs={'type': 'datetime-local'})
    }