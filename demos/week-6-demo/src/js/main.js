window.onload = function() {
	document.getElementById("sign-up-btn").addEventListener("click", function() {
		document.querySelector(".signup").classList.add("active");

		setTimeout(function() {
			document.getElementById("signup-name").focus();
		}, 500);
	});
}