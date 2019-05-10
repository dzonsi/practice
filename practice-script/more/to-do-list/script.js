var list = document.getElementsByTagName('li');
for(i = 0; i < list.length; i++) {
	var span = document.createElement('span');
	var close = document.createTextNode('\u00D7');
	span.appendChild(close);
	span.className = 'close';
	list[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
for(i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = 'none';
	}
}

var completList = document.querySelector('ul');
completList.addEventListener('click', function(event) {
	if(event.target.tagName === 'LI') {
		event.target.classList.toggle('checked');
	}
});

function newElement() {
	var input = document.getElementById('myInput');
	if(input.value == '') {
		alert('You must write something!');
	} else {
		var list = document.createElement('li');
		var text = document.createTextNode(input.value);
		list.appendChild(text);
		var element = document.getElementById('myUL');
		element.appendChild(list);

		input.value = '';

		var span = document.createElement('span');
		var closeText = document.createTextNode('\u00D7');
		span.appendChild(closeText);
		span.className = 'close';
		list.appendChild(span);

		for(i = 0; i < close.length; i++) {
			close[i].onclick = function() {
				var div = this.parentElement;
				div.style.display = 'none';
			}
		}
	}
}
window.onkeyup = function(event) {
	if(event.keyCode == 13) {
		newElement();
	}
}