$(document).ready(function(){
	$('#myInput').keyup(function(){
		var value = $('#myInput').val().toUpperCase();
		var list = $('#myUL li');
		list.each(function(){
			var text = $(this).first().text().toUpperCase();
			if(text.indexOf(value) > -1) {
				$(this).show();
			} else {
				$(this).hide();
			}
		})
	});
});