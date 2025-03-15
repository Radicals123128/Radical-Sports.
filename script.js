// Ensure script runs only after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Back to Top Button
    let mybutton = document.getElementById("myBtn");
  
    // Show/hide the button on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
  
      // Add sticky class to the header when scrolled
      const header = document.querySelector('header');
      if (window.scrollY > 50) { // adjust the value to your liking
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  
    // Scroll to top when button is clicked
    mybutton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Slideshow Functionality
    let slideIndex = 1;
    showSlides(slideIndex);
  
    // Next/previous controls
    document.querySelector(".prev").addEventListener("click", function () {
      changeSlide(-1);
    });
  
    document.querySelector(".next").addEventListener("click", function () {
      changeSlide(1);
    });
  
    // Dots navigation
    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.addEventListener("click", function () {
        setSlide(index + 1);
      });
    });
  
    function changeSlide(n) {
      showSlides(slideIndex += n);
    }
  
    function setSlide(n) {
      showSlides(slideIndex = n);
    }
  
    function showSlides(n) {
      let slides = document.querySelectorAll(".mySlides");
      let dots = document.querySelectorAll(".dot");
  
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;
  
      slides.forEach(slide => slide.style.display = "none");
      dots.forEach(dot => dot.classList.remove("active"));
  
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
    }
  });
  
  // You can add JavaScript code if needed, for example, for scroll behavior or interactivity.
  document.addEventListener("DOMContentLoaded", function() {
    // Example JS to toggle active class on navbar
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbarLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });