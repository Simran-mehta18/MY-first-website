// script.js
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      document.getElementById('background-animation').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, 3000); // Matches the duration of the fadeOut animation
  });
  