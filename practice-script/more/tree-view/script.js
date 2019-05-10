var caret = document.getElementsByClassName('caret');
for (i =0; i < caret.length; i++) {
	caret[i].addEventListener('click', function() {
		this.parentElement.querySelector('.inside').classList.toggle('active');
		this.classList.toggle('caret-down');
	})
}
// text
var interval = 100;
var text = "Some random text...Bla bla bla...";
var i = 0;
document.body.onload = writer();

function writer() {
	if(i < text.length) {
		document.getElementById('demo').innerHTML += text.charAt(i);
		i++;
		setTimeout(writer, interval);
	}
}
// timer
var countDownDate = new Date("May 10, 2020").getTime();

var x = setInterval(function() {
	var now = new Date().getTime();

	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	var time = days + 'd ' + hours + 'h ' + minutes +'m ' + seconds + 's';
	document.getElementById('timer').innerHTML = time;

	if(distance < 0) {
		clearInterval(x);
		document.getElementById('timer').innerHTML = 'EXPIRED';
	}
}, 1000);