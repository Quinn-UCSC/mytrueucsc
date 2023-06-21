// includedContent.js - Creating a script to load content from the https://news.ucsc.edu/ website.
// Author: Michael Quinn
// Date: 6/20/2023

$(document).ready(function() {
  var url = "https://news.ucsc.edu/";

// Set CORS headers
     $.ajaxPrefilter(function(options) {
     if (options.crossDomain && $.support.cors) {
       options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
     }
   });
//  Set CORS headers from server side. (Unable to do on github pages since we don't own the server)
//   $.ajaxSetup({
//     beforeSend: function(xhr) {
//       xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//     }
//   });

// Make AJAX request to fetch news
  $.ajax({
    url: url,
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
        var image = url + currentItem.find("a img").attr("src");
        var title = currentItem.find("h3 a").text().trim();
        var description = currentItem.find("p").text().trim();

        // Create the HTML for the item
        var itemHTML = "<div class='item' style = 'text-align: left;'>" +
          "<span style = 'padding-left: 15px;'>" + date + "</span>" +
          "<h2 style ='font-size: 21px; text-align: center; overflow: hidden; text-overflow: ellipsis;'>" + title + "</h2>" +
          "<div class='thumbnail-container'>" +
          "<a href='" + link + "'>" +
          "<img src='" + image + "' alt='" + title + "' class='thumbnail-image'>" +
          "</a>" +
          "</div>" +
          "<span class = 'description' style = 'color: gold;'>" + description + "</span>" +
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

        // Call the displayItem function again after 20 seconds
        setTimeout(displayItem, 20000);
      }
    },
    error: function(xhr, textStatus, errorThrown) {
      // Display error message
      $(".slideshow").html("<p>AJAX request failed: " + textStatus + "</p>");
    }
  });
});
