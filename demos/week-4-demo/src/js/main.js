var lightboxIndex = 0;
var imagesLoaded = 0;
var imagesToLoad = 0;

function cycleLightbox() {
	// get list of all image elements
	let lbImages = document.querySelector(".lightbox").children;

	// remove active class from currently visible imaage
	lbImages[lightboxIndex].classList.remove("is-active");

	// increment index, set to zero if we go beyond our array length
	lightboxIndex++;
	if (lightboxIndex >= lbImages.length) {
		lightboxIndex = 0;
	}

	// add active class to new index
	lbImages[lightboxIndex].classList.add("is-active");
}

function loadImages() {
	let lbImages = document.querySelector(".lightbox").children;

	for (let i = 0; i < lbImages.length; i++) {
		let imageUrl = lbImages[i].getAttribute("data-image");

		if (!imageUrl) {
			continue;
		}

		imagesToLoad++;
		lbImages[i].addEventListener("load", checkForImagesLoaded);
		lbImages[i].setAttribute("src", imageUrl);
	}
}

function checkForImagesLoaded() {
	console.log("Loaded image!");

	imagesLoaded++;

	if (imagesLoaded >= imagesToLoad) {
		setInterval(cycleLightbox, 2000);
	}
}

window.onload = function() {
	loadImages();
}