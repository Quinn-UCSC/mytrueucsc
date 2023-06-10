// automatic-slideshow.js - Automatic Slideshow Code
// Author: Michael Quinn
// Date: 5/22/2023

// jQuery Code
$(document).ready(function() {
    // Set the interval duration (in milliseconds)
    var intervalDuration = 5000;
  
    // Select the image slideshow container
    var slideshow = $(".image-slideshow");
  
    // Get all the image containers within the slideshow container
    var imageContainers = slideshow.find(".image-fade");

    // Set the current image index to 0
    var currentIndex = 0;

    // Variable to store the setInterval reference
    var slideshowInterval;
  
    // Hide all image containers except the first one
  imageContainers.not(":first").hide();

  // Function to display the next image
  function showNextImage() {
    // Hide the current image container
    imageContainers.eq(currentIndex).hide();

    // Increment the current index or loop back to the first image if the last image is reached
    currentIndex = (currentIndex + 1) % imageContainers.length;

    // Show the next image container
    imageContainers.eq(currentIndex).show();
  }

  // Function to display the previous image
  function showPreviousImage() {
    // Hide the current image container
    imageContainers.eq(currentIndex).hide();

    // Decrement the current index or loop to the last image if the first image is reached
    currentIndex = (currentIndex - 1 + imageContainers.length) % imageContainers.length;

    // Show the previous image container
    imageContainers.eq(currentIndex).show();
  }

  // Event listener for clicking on the right arrow
  $("#arrow-right").click(function() {
    // Clear the setInterval to pause the automatic slideshow
    clearInterval(slideshowInterval); 
    showNextImage();
    // Restart the automatic slideshow
    startSlideshow();
  });

  // Event listener for clicking on the left arrow
  $("#arrow-left").click(function() {
    // Clear the setInterval to pause the automatic slideshow
    clearInterval(slideshowInterval); 
    showPreviousImage();
    // Restart the automatic slideshow
    startSlideshow();
  });
  
  function startSlideshow() {
    slideshowInterval = setInterval(function() {
      // Find the currently visible image container
        var currentContainer = slideshow.find(".image-fade:visible"); 
      // Hide the current image container
        currentContainer.hide(); 
      // Get the next image container or loop back to the first one
        var nextContainer = currentContainer.next(".image-fade").length ? currentContainer.next(".image-fade") : imageContainers.first();
      // Show the next image container
        nextContainer.show(); 
    }, intervalDuration);
  }

// Start the slideshow initially
  startSlideshow();
});