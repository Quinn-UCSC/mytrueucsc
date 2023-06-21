// includedContent.js - Creating a script to load content from the https://news.ucsc.edu/ website.
// Author: Michael Quinn
// Date: 6/20/2023

$(document).ready(function() {
    const slideshowContainer = $('.slideshow');
    const slideshowParagraph = slideshowContainer.find('p');

    // Function to transition to the next item
    function nextItem(items, currentIndex) {
      // Update the text content with the current item
      slideshowParagraph.html(items[currentIndex]);

      // Remove the "active" class from the current item
      slideshowParagraph.removeClass('active');

      // Increment the current index
      currentIndex = (currentIndex + 1) % items.length;

      // Add the "active" class to the next item
      slideshowParagraph.addClass('active');

      // Transition to the next item every 10 seconds
      setTimeout(function() {
        nextItem(items, currentIndex);
      }, 10000);
    }

    // Fetch data from the URL using AJAX
    $.ajax({
      url: 'https://cors-anywhere.herokuapp.com/https://news.ucsc.edu/',
      method: 'GET',
      dataType: 'html',
      success: function(data) {
        const items = [];

        // Extract the necessary information from each <li> item in the .content-box section
        $(data).find('.content-box li').each(function() {
          const listItem = $(this);
          const type = listItem.find('.type').text().trim();
          const link = listItem.find('a').attr('href');
          const image = listItem.find('img').attr('src');
          const title = listItem.find('h2 a').text().trim();
          const description = listItem.find('p').text().trim();

          // Create an HTML structure to display the information
          const itemHTML = `
            <div>
              <h2>${type}</h2>
              <a href="${link}">
                <img src="${image}" alt="${title}">
              </a>
              <h3>${title}</h3>
              <p>${description}</p>
            </div>
          `;

          items.push(itemHTML);
        });

        if (items.length > 0) {
          let currentIndex = 0;
          nextItem(items, currentIndex);
        } else {
          // Display an error message if no items were found
          slideshowParagraph.text('No items found');
        }
      },
      error: function(xhr, status, error) {
        // Display the error message in the HTML page
        slideshowParagraph.text('AJAX request failed: ' + error);
      }
    });
  });