// page.js - Inspiration of Wes Modes's demo of a one page website using jQuery. Link to inspiration: https://wmodes.github.io/art101/demos/onepage/index.html
// Author: Michael Quinn
// Date: 5/26/2023

$(document).ready(function() {
    $(".tab-content .tab-pane").hide(); // Hide all tab content initially
    $(".tab-content .tab-pane.active").show(); // Show the initially active tab content
    
    $(".tab").click(function() {
      var tabId = $(this).data("tab"); // Get the data-tab value of the clicked tab
      $(".tab").removeClass("active"); // Remove active class from all tabs
      $(this).addClass("active"); // Add active class to the clicked tab
      
      $(".tab-content .tab-pane").hide(); // Hide all tab content
      $(".tab-content .tab-pane[data-tabcontent='" + tabId + "']").show(); // Show the corresponding tab content
    });
  });