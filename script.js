

setInterval(moveToNextSlide, 3000);


function makeCall() {
    window.location.href = 'tel:+923181978750';
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Navbar toggle close on click (for mobile view)
  document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('.navbar-collapse');
  
    navbarToggler.addEventListener('click', function () {
      navbarNav.classList.toggle('show');
    });
  
    // Close navbar when a link is clicked (in mobile view)
    document.querySelectorAll('.navbar-nav a').forEach(navbarLink => {
      navbarLink.addEventListener('click', function () {
        navbarNav.classList.remove('show');
      });
    });
  });
  