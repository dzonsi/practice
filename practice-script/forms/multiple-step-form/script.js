var n = 0;

next(n);

function next(n) {
	var row = document.getElementsByClassName('row');
	var dot = document.getElementsByClassName('dot');
	var previous = document.getElementById("previous");
	var next = document.getElementById("next");
	var form = document.getElementById('register');
	if(n === 4) {
		form.submit();
		n = 0;
		next(n);
	}

	for(var i = 0; i < row.length; i++) {
		row[i].style.display = "none";
		dot[i].classList.remove("dot-active", "dot-ok");
	}
	row[n].style.display = "block";
	dot[n].classList.add("dot-active");
	for (var j = 0; j < n; j++) {
		dot[j].classList.add("dot-ok");
	}
	if(n === 0) {
		previous.style.display = "none";
	} else {
		previous.style.display = "inline";
	}
	if(n === 3) {
		next.innerHTML = "Submit";// type i slanje forme???
	} else {
		next.innerHTML = "Next";
	}
}

function prevNext(x) {
	n += x;
	if(n > 4) {
		n = 0;
	}
	if(n < 0) {
		n = 0;
	}
	next(n);
}