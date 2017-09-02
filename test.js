$(document).ready(function(){
	$("#box").hide(100);
	
}

);




 $("#search").on("click",function() {
	 $("#box").show(100);
	$("#vids").empty();
	var videos = $('#key').val().trim();
	var URL = "https://www.googleapis.com/youtube/v3/";
	var key = "AIzaSyC4tz1TDHpgGTkAyNR9ycjU0cixA6bDNnk";
	var videoSearch = URL + "search?&q=" + videos + "&part=snippet&chart=mostPopular&videoCategoryId=27&type=video&maxResults=1&key=" + key;



        $.ajax({
                url: videoSearch,
                method: "GET",
              
                dataType: 'jsonp'
            })
            .done(function(response) {
					var videoId = response.items[0].id.videoId;
                    console.log(response.items[0]); $('#vids').append("<iframe width='100%' height='100%' src='https://www.youtube.com/embed/" + videoId + "' frameborder='0'id='hi'></iframe>");
                  
	                 
				        
				
				
            })
    });
	
	