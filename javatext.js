$(document).ready(function(){
	$("#editor1").hide(100);


$("#start").on("click",function(e){
	e.preventDefault

$("#editor1").show(100);
CKEDITOR.replace('editor1' );
});
});