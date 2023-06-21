// includedContent.js - Creating a script to load content from the https://news.ucsc.edu/ website.
// Author: Michael Quinn
// Date: 6/20/2023

$(document).ready(function() {
  var url = "https://news.ucsc.edu/";

  // Make AJAX request
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://news.ucsc.edu/",
    dataType: "html",
    success: function(data) {
      var html = $(data);

      // Find the content box element
      var contentBox = html.find(".content-box");

      // Find all the list items within the content box
      var listItems = contentBox.find("li");

      // Set initial index and display the first item
      var currentIndex = 0;
      displayItem();

      // Function to display each item
      function displayItem() {
        // Get the current list item
        var currentItem = $(listItems[currentIndex]);

        // Extract the necessary information
        var date = currentItem.find(".date").text().trim();
        var link = url + currentItem.find("h3 a").attr("href");
        var image = url + currentItem.find(".thumbnail").attr("src");
        var title = currentItem.find("h3 a").text().trim();
        var description = currentItem.find("p").text().trim();

        // Create the HTML for the item
        var itemHTML = "<div class='item'>" +
        	"<span style = 'text-align: right;'>" + date + "</span>" +
        	"<h2>" + title + "</h2>" +
          "<a href='" + link + "'>" +
          "<img src='" + image + "' alt='" + title + "' style = 'max-height: 50%; max-width: 50%;'>" +
          "</a>" +
          "<p>" + description + "</p>" +
          "</div>";

        // Fade out the current item
        $(".slideshow").fadeOut(500, function() {
          // Replace the content with the new item HTML
          $(this).html(itemHTML);

          // Fade in the new item
          $(this).fadeIn(500);
        });

        // Increment the index or reset to 0 if reached the end
        currentIndex = (currentIndex + 1) % listItems.length;

        // Call the displayItem function again after 10 seconds
        setTimeout(displayItem, 10000);
      }
    },
    error: function(xhr, textStatus, errorThrown) {
      // Display error message
      $(".slideshow").html("<p>AJAX request failed: " + textStatus + "</p>");
    }
  });
});