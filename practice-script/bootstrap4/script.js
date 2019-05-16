$(document).ready(function(){
	$("#toast1").toast("show");
	$("#toast2").toast("show");
	$('#popover1').popover({
		trigger: "focus",
		delay: 3000	});
	$('#popover2').popover({trigger: "hover"});
	$("#popover1").on("shown.bs.popover", function() {
		$("#popover1").toggleClass("btn-danger").toggleClass("btn-success");
	});
	$("#popover1").on("hidden.bs.popover", function() {
		$("#popover1").toggleClass("btn-danger").toggleClass("btn-success");
	});
});
(function(){
	"use strict";
	window.addEventListener("load", function() {
		var forms = document.getElementsByClassName("needs-validation");
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener("submit", function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add("was-validated");
			}, false);
		});
	}, false);
})();