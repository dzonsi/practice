function openModal() {
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
}

function closeModal() {
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
}

var slideIndex;

function plusSlides(n) {
	slideIndex += n;
	if (slideIndex == 0) {
		slideIndex = 4;
	} else if ( slideIndex > 4) {
		slideIndex = 1;
	}
	showSlides(slideIndex);
}

function currentSlide(n) {
	showSlides(n);
	slideIndex = n;
}

function showSlides(n) {
	var mySlides = document.querySelectorAll(".mySlides");
	var caption = document.getElementById("caption");
	var img = document.querySelectorAll("img");
	var demo = document.getElementsByClassName("demo");

	for (var i = 0; i < mySlides.length; i++) {
		mySlides[i].style.display = "none";
	}

	mySlides[n - 1].style.display = "block";

 caption.innerHTML = demo[n -1].alt;

 for (var j = 0; j < demo.length; j++) {
 	demo[j].classList.remove("active");
 }
 
 demo[n - 1].classList.add("active");
}

/*
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
 */
