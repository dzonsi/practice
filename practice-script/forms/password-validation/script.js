var submit = document.getElementById('submit');
var input = document.getElementById('password');
var message = document.getElementById('message');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');
var show = document.getElementById('show');
var showInput = document.getElementById('show-input');

submit.onclick = function(event) {
	event.preventDefault();
}
submit.disabled = true;
show.onclick = function() {
	if(showInput.checked === true) {
		input.type = "text";
	} else {
		input.type = "password";
	}
}

input.onfocus = function() {
	message.style.display = "block";
}
input.onblur = function() {
	message.style.display = "none";
}
input.onkeyup = function() {
// lowerCaseLetters
	var lowerCaseLetters = /[a-z]/g;
	if(input.value.match(lowerCaseLetters)) {
		letter.classList.remove('invalid');
		letter.classList.add('valid');
	} else {
		letter.classList.remove('valid');
		letter.classList.add('invalid');
	}
// upperCaseLetters
	var upperCaseLetters = /[A-Z]/g;
	if(input.value.match(upperCaseLetters)) {
		capital.classList.remove('invalid');
		capital.classList.add('valid');
	} else {
		capital.classList.remove('valid');
		capital.classList.add('invalid');
	}
// number
	var numbers = /[0-9]/g;
	if(input.value.match(numbers)) {
		number.classList.remove('invalid');
		number.classList.add('valid');
	} else {
		number.classList.remove('valid');
		number.classList.add('invalid');
	}
// minimum 8 characters
	if(input.value.length >= 8) {
		length.classList.remove('invalid');
		length.classList.add('valid');
	} else {
		length.classList.remove('valid');
		length.classList.add('invalid');
	}
// input status
	if( input.value.match(lowerCaseLetters) &&
			input.value.match(upperCaseLetters) &&
			input.value.match(numbers) &&
			input.value.length >= 8
		) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
}