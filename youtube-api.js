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
        // Replaces div id output with an iframe that uses the id data of the playlist as the youtube id url
        $("#output").html("<iframe width='1000' height='500' class='yt-frame' src='https://www.youtube.com/playlist?list="+housePlaylist.id+"'>");
    },
    // Check to see if there is an error in API
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
});