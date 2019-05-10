/*
var video = document.getElementById('video');
var button = document.getElementById('btn');

function state() {
	if(video.paused) {
		video.play();
		btn.innerHTML = 'Pause';
	} else {
		video.pause();
		btn.innerHTML = 'Play';
	}
}
*/

$(document).ready(function(){
	var video = $('#video');
	var btn = $('#btn');
	btn.click(function(){
		if(video.get(0).paused) {
			video.get(0).play();
			btn.html('Pause');
		} else {
			video.get(0).pause();
			btn.html('Play');
		}
	});
});