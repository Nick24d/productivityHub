from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.shortcuts import get_object_or_404, redirect, render

# from django.views.decorators.csrf import csrf_protect
from .forms import TaskForm
from .models import Task


@login_required
def task_list(request):
  tasks = Task.objects.filter(user=request.user)
  return render(request, 'productivityHub/task_list.html', {'tasks': tasks})


@login_required
def add_task(request):
  if request.method == 'POST':
    form = TaskForm(request.POST)
    if form.is_valid():
      task = form.save(commit=False)
      task.user = request.user
      task.save()
      return redirect('task-list')
      print("User authenticated:", request.user.is_authenticated)
  else:
    form = TaskForm()
  return render(request, 'productivityHub/add_task.html', {'form': form})

def complete_task(request, task_id):
    task = get_object_or_404(Task, id=task_id, user=request.user)
    task.status = 'COMPLETED'  # Ensure status is updated
    task.save()
    return redirect('task-list')  # Redirect back to task list after completion


# sign up view
def signup(request):
  if request.method == 'POST':
    form = UserCreationForm(request.POST)
    if form.is_valid():
      user = form.save()
      login(request, user)
      return redirect('login')
  else:
    form = UserCreationForm()  # Initialize the form for GET request
    # Render the signup page with the form
  return render(request, 'productivityHub/signup.html',
                {'form': form})  # Fixed: return render instead of None


#login view
def login_view(request):
  if request.user.is_authenticated:
    return redirect('task-list')

  if request.method == 'POST':
    form = AuthenticationForm(data=request.POST)
    if form.is_valid():
      user = form.get_user()
      login(request, user)
      return redirect('task-list')  #redirect to task-list after login
    else:
      return render(request, 'productivityHub/login.html', {
          'form': form,
          'error': 'Invalid username or password'
      })
  else:
    form = AuthenticationForm()
  return render(request, 'productivityHub/login.html', {'form': form})


#logout view
#@csrf_protect
def logout_view(request):
  logout(request)
  return redirect('login')


# Create your views here.
