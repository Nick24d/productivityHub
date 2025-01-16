document.addEventListener('DOMContentLoaded', function() {
  const taskModal = document.getElementById('taskModal');
  const closeModalButton = document.getElementById('closeModal');
  const markCompleteButton = document.getElementById('markComplete');

  // Show the modal with task details when a task is clicked
  const viewTaskButtons = document.querySelectorAll('.view-task');
  viewTaskButtons.forEach(button => {
    button.addEventListener('click', function() {
      const taskId = this.getAttribute('data-task-id');
      const taskTitle = this.getAttribute('data-title');
      const taskDescription = this.getAttribute('data-description');
      const taskDeadline = this.getAttribute('data-deadline');

      // Update modal content
      document.getElementById('taskTitle').textContent = taskTitle;
      document.getElementById('taskDescription').textContent = taskDescription;
      document.getElementById('taskDeadline').textContent = 'Deadline: ' + taskDeadline;

      // Show the modal
      taskModal.style.display = 'block';

      // Mark the task as completed when the button is clicked
      markCompleteButton.href = `/complete_task/${taskId}`;  // Modify this URL based on your complete task logic
    });
  });

  // Close the modal
  closeModalButton.addEventListener('click', function() {
    taskModal.style.display = 'none';
  });
});