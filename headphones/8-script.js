document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.querySelector('.menu-icon');
  const exitIcon = document.querySelector('.exit-icon');

  // Toggle nav menu visibility
  menuToggle.addEventListener('change', function () {
    if (this.checked) {
      navLinks.classList.add('show-menu');
      menuIcon.style.display = 'none';
      exitIcon.style.display = 'inline';
    } else {
      navLinks.classList.remove('show-menu');
      menuIcon.style.display = 'inline';
      exitIcon.style.display = 'none';
    }
  });

  // Optional: close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false;
      navLinks.classList.remove('show-menu');
      menuIcon.style.display = 'inline';
      exitIcon.style.display = 'none';
    });
  });
});
