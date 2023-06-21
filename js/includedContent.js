// includedContent.js - Creating a script to load content from another html file and having it appear in the designated div.
// Author: Michael Quinn
// Date: 6/20/2023

 // Use window.onload event
 window.onload = function() {
    $("#includedContent1").load("https://quinn-ucsc.github.io/mytrueucsc/ucsc_party_instagram_embed.html");
    $("#includedContent2").load("https://quinn-ucsc.github.io/mytrueucsc/student_art_instagram_embed.html");
};