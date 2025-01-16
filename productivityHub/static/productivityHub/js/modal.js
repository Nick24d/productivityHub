document.addEventListener('DOMContentLoaded', function() {
  const taskModal = document.getElementById('taskModal');
  const closeModalButton = document.getElementById('closeModal');
  const markCompleteButton = document.getElementById('markComplete');

  // Ensure modal, buttons, and task elements exist
  if (taskModal && closeModalButton && markCompleteButton) {
    // Show the modal with task details when a task is clicked
    const viewTaskButtons = document.querySelectorAll('.view-task');
    viewTaskButtons.forEach(button => {
      button.addEventListener('click', function() {
        const taskId = this.getAttribute('data-task-id') || '';
        const taskTitle = this.getAttribute('data-title') || 'No Title Provided';
        const taskDescription = this.getAttribute('data-description') || 'No Description Available';
        const taskDeadline = this.getAttribute('data-deadline') || 'No Deadline Set';

        // Update modal content
        document.getElementById('taskTitle').textContent = taskTitle;
        document.getElementById('taskDescription').textContent = taskDescription;
        document.getElementById('taskDeadline').textContent = 'Deadline: ' + taskDeadline;

        // Show the modal with Solo Leveling style animation
        taskModal.style.display = 'block';
        taskModal.classList.add('modal-show'); // Add a class for the animation

        // Update the "Mark as Completed" button
        markCompleteButton.href = `/complete_task/${taskId}`;
      });
    });

    // Close the modal on button click
    closeModalButton.addEventListener('click', function() {
      taskModal.style.display = 'none';
      taskModal.classList.remove('modal-show');
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === taskModal) {
        taskModal.style.display = 'none';
        taskModal.classList.remove('modal-show');
      }
    });

    // Confirm task completion
    markCompleteButton.addEventListener('click', function(event) {
      if (!confirm('Are you sure you want to mark this task as completed?')) {
        event.preventDefault();
      }
    });
  }
});
