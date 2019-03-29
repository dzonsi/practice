$(document).ready(function(){
	$("[data-toggle='tooltip']").tooltip();
	$("[data-toggle='popover']").popover();
	$("#myInput").on("keyup", function(){
		var value = $(this).val().toLowerCase();
		$("#myTable tr").filter(function(){
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
	$("#myInput2").on("keyup", function(){
		var value = $("#myInput2").val().toLowerCase();
		$("#myList2 li").filter(function(){
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
	$("#myInput3").on("keyup", function(){
		var value = $("#myInput3").val().toLowerCase();
		$("#myList3 li").filter(function(){
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
});