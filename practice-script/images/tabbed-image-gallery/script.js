function showTabbed(image) {
	var tabbed = document.getElementById("tabbed");
	var target = document.getElementById("img-target");
	var text = document.getElementById("text");

	tabbed.style.display = "block";
	target.src = image.src;
	target.alt = image.alt;
	text.innerHTML = image.alt;

}