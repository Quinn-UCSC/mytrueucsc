// youtube-api.js - Youtube API
// Author: Romario Linares
// Date: 6/8/2023
$.ajax({
    url: "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCWOt6UqtvLP33EeIax7zHKw&maxResults=25&key=AIzaSyDJl058OrD1qh2PO7KpxfkpzOobO01XBn8",
    data: {},
    type: "GET",

    // Success function prints data for all playlists in UCSC channel
    success: function (data) {
        console.log(data);
        // Variable to store the specific items of the third playlist in the data index
        var housePlaylist = data.items[3];
        console.log(housePlaylist);
        // Create a div to contain the player
        var playerDiv = $("<div>").attr("id", "player");
        $("#output").append(playerDiv);

        // Load the YouTube IFrame Player API
        $.getScript("https://www.youtube.com/iframe_api", function() {
            // Function called when YouTube IFrame Player API is ready
            window.onYouTubeIframeAPIReady = function () {
                // Create the player
                new YT.Player("player", {
                    height: "300",
                    width: "500",
                    playerVars: {
                        listType: "playlist",
                        list: housePlaylist.id,
                    },
                });
            };
        });
    },
    // Check to see if there is an error in API
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
});