// displaynews.js - Dynamic Scrolling News Header that uses an array to display different news headlines.
// Author: Michael Quinn
// Date: 6/9/2023

// Assuming you have an array of news stored in the `newsArray` variable
var newsArray = [
    "Did you know that you could join discord servers at the UCSC Discord Student Hub? Please check out the student hub tutorial <a href='studenthub.html'>here</a>!",
    "Please come to ARTG-80I's new Playfaire <span style = 'font-style: italic;'>happening</span> <span style = 'font-weight: bold;'>NEXT Wednesday</span>! I promise you will have a good time!",
  ];
  
  function displayNews() {
    var newsContainer = $('#news-header');
    var newsContent = '';

    // Repeat the newsArray multiple times to create a continuous loop
    var repeatedArray = newsArray.concat(newsArray);
  
    // Loop through the repeatedArray and create the content for the scrolling header
    for (var i = 0; i < repeatedArray.length; i++) {
        newsContent += '<span class="news-item">' + repeatedArray[i] + '</span>';
  
    // If it's not the last news item, add a notification for the next news
    if (i !== newsArray.length - 1) {
        newsContent += ' <span class="notification" style = "10px;">Next-up: </span>';
      }
    }
  
    newsContainer.html(newsContent);
  }
  
  // Call the displayNews function to start displaying the news
  $(document).ready(function() {
    displayNews();
  });  