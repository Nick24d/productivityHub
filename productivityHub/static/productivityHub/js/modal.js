document.addEventListener('DOMContentLoaded', function() {
  const taskModal = document.getElementById('taskModal');
  const markCompleteButton = document.getElementById('markComplete');

  // Ensure modal, buttons, and task elements exist
  if (taskModal && markCompleteButton) {
    const viewTaskButtons = document.querySelectorAll('.view-task');
    viewTaskButtons.forEach(button => {
      button.addEventListener('click', function() {
        const taskId = this.getAttribute('data-task-id');
        const taskTitle = this.getAttribute('data-title') || 'No Title Provided';
        const taskDescription = this.getAttribute('data-description') || 'No Description Available';
        const taskDeadline = this.getAttribute('data-deadline') || 'No Deadline Set';

        // Update modal content
        document.getElementById('taskTitle').textContent = taskTitle;
        document.getElementById('taskDescription').textContent = taskDescription;
        document.getElementById('taskDeadline').textContent = 'Deadline: ' + taskDeadline;

        // Show the modal
        taskModal.style.display = 'block';
        taskModal.classList.add('modal-show'); // Animation for modal

        // Dynamically update the "Mark as Completed" button href
        markCompleteButton.href = `/tasks/complete/${taskId}`; // Dynamically update the 'Mark as Completed' button URL with the correct task ID when a task is viewed

      });
    });

    
    window.addEventListener('click', function(event) {
      if (event.target === taskModal) {
        taskModal.style.display = 'none';
        taskModal.classList.remove('modal-show');
      }
    });
  }
});
