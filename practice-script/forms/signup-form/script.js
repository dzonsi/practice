$(document).ready(function(){
	$("#first").click(function(){
		$("#modal").show();
	});
	$("#second, #third").click(function(){
		$("#modal").hide();
	});
	$(window).click(function(event){
		var target = $(event.target);
		if(target.is('#modal')) {
			$('#modal').hide();
		}
	});
});