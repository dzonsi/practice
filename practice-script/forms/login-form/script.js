var modal = document.getElementById('form');
var body = document.body;

window.onclick = function(event) {
	if (event.target == body) {
		modal.style.display = "none";
		body.style.backgroundColor = "transparent";
	}
}