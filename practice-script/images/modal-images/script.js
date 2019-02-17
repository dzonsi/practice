var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var container = document.getElementById("container");
var allImages = container.querySelectorAll("img");

function trigger() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

for (var i = 0; i < allImages.length; i++) {
	allImages[i].addEventListener("click", trigger);
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
	modal.style.display = "none";
}