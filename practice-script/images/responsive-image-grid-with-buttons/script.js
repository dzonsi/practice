var column = document.getElementsByClassName("column");
var i;

function one() {
	for (i = 0; i < column.length; i++) {
		column[i].style.msFlex = "100%";
		column[i].style.flex = "100%";
	}
}

function two() {
	for (i = 0; i < column.length; i++) {
		column[i].style.msFlex = "50%";
		column[i].style.flex = "50%";
	}
}

function four() {
	for (i = 0; i < column.length; i++) {
		column[i].style.msFlex = "25%";
		column[i].style.flex = "25%";
	}
}

var container = document.getElementById("btn-container");
var button = container.getElementsByClassName("btn");

for (i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function() {
	var current = document.getElementsByClassName("active");
	current[0].classList.remove("active");
    this.classList.add("active");
	});
}
