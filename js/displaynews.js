// displaynews.js - Dynamic Scrolling News Header that uses an array to display different news headlines.
// Author: Michael Quinn
// Date: 6/9/2023

// Assuming you have an array of news stored in the `newsArray` variable
var newsArray = [
  "Did you know that you could join discord servers at the UCSC Discord Student Hub? Please check out the student hub tutorial <a href='studenthub.html'>here</a>!",
  "Please come to ARTG-80I's new Playfaire <span style='font-style: italic;'>happening</span> <span style='font-weight: bold;'>TODAY</span>! I promise you will have a good time!"
];

function displayNews() {
  var newsContainer = $('#news-header');
  var newsContent = '';

  // Loop through the newsArray and create the content for the scrolling header
  for (var i = 0; i < newsArray.length; i++) {
    newsContent += '<span class="news-item">' + newsArray[i] + '</span>';

    // If it's not the last news item, add a notification for the next news
    if (i !== newsArray.length - 1) {
      newsContent += ' <span class="notification">Next-up: </span>';
    }
  }
  newsContainer.html(newsContent);

  // Restart the displayNews function once the news array is finished
  if (i === newsArray.length) {
    setTimeout(displayNews, 45000); // Restart after a 45-second delay (adjust as needed)
  }
}

// Call the displayNews function to start displaying the news
$(document).ready(function() {
  displayNews();
});
