// consistent-slideshow.js - Slideshow Code
// Author: Michael Quinn
// Date: 5/28/2023

$(document).ready(function() {
    // Select all slide elements
    const slides = $('.slide');
    // Initialize the slide index
    let slideIndex = 0;
  
    // Function to show the current slide
    function showSlide() {
      // Remove the "active" class from all slides
      slides.removeClass('active');
      // Add the "active" class to the current slide
      $(slides[slideIndex]).addClass('active');
    }
  
    // Function to move to the next slide
    function nextSlide() {
      // Increment the slide index
      slideIndex++;
      // If the slide index exceeds the number of slides, reset it to 0
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      // Show the current slide
      showSlide();
    }
  
    // Set an interval to call the nextSlide function every 3 seconds
    setInterval(nextSlide, 5000);
  
    // Show the initial slide
    showSlide();
  });