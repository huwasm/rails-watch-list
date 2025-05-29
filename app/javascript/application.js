// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "bootstrap"

// Bootstrap Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  const removeModal = document.getElementById('removeModal');
  let currentBookmarkId = null;

  if (removeModal) {
    // When modal is about to show, populate it with movie data
    removeModal.addEventListener('show.bs.modal', function(event) {
      const button = event.relatedTarget; // Button that triggered the modal

      // Extract info from data attributes
      const movieTitle = button.getAttribute('data-movie-title');
      const moviePoster = button.getAttribute('data-movie-poster');
      const movieComment = button.getAttribute('data-movie-comment');
      const listName = button.getAttribute('data-list-name');
      currentBookmarkId = button.getAttribute('data-bookmark-id');

      // Update modal content
      document.getElementById('modal-movie-info').innerHTML = `
        <img src="${moviePoster}" alt="${movieTitle}" style="width: 60px; height: 90px; object-fit: cover;" class="me-3">
        <div>
          <h6 class="mb-1">${movieTitle}</h6>
          <small class="text-muted">From "${listName}"</small>
        </div>
      `;

      document.getElementById('modal-confirmation-text').innerHTML =
        `Are you sure you want to remove <strong>${movieTitle}</strong> from this list?`;

      document.getElementById('modal-comment-text').innerHTML =
        `Your note: "${movieComment}"`;
    });

    // Handle confirm button click
    document.getElementById('confirmRemove').addEventListener('click', function() {
      if (currentBookmarkId) {
        document.getElementById(`remove-form-${currentBookmarkId}`).submit();
      }
    });
  }
});
