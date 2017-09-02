var topic=$("#key").val();
var limit= 1;
 
 var youtube = "https://www.youtube.com/embed/";
var url="https://www.googleapis.com/youtube/v3/search?key=AIzaSyC4tz1TDHpgGTkAyNR9ycjU0cixA6bDNnk&part=snippet&maxResults="+limit+"&type=video&q=";



$(document).ready(function(){
	
	var counter=0;
	var keys= $("#key").val();
     $("#search").click(function(){
		 
			url+=$("#key").val();

		 $.ajax({url: url, type: "GET",
		 success: function(data) {
     
			console.log(status);
			alert(youtube + data.items[0].id.videoId);
			console.log(JSON.stringify(data.items));
			$('#youtubeArea').attr('src', youtube + data.items[0].id.videoId);
			 

		}});
	
			
	
			
			
			
		return false;
	 });
});

/// async await