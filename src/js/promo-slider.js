const promoSlides = document.querySelectorAll(".promo-slide");
const navigationDots = document.querySelectorAll(".promo-slider__dot");
const promoSliderDotsContainer = document.querySelector(".promo-slider__dots");
const navigationArrows = document.querySelectorAll(".promo-slider__arrow");

let currentSliderNumber = document.getElementById("promo-slider-current-number")
let activeSlide = document.getElementsByClassName("promo-slide--active");
let activeSlideDot = document.getElementsByClassName("promo-slider__dot--active");

navigationArrows.forEach(element => {
	element.addEventListener("click", function (e) {
		const arrow = element.id
		console.log("Clicked: " + arrow);

		if (arrow === "promo-slider__arrow-right") {
			let slideId = activeSlide[0].id.charAt(activeSlide[0].id.length - 1);
			console.log("Slide ID: " + slideId);

			if (slideId === "4") {
				slideId = "0";
			}

			const nextSlide = document.getElementById(`promo-slide-${Number(slideId) + 1}`);
			const nextSlideDot = document.getElementById(`promo-slider__dot-${Number(slideId) + 1}`);

			console.log("Next slide: " + nextSlide.id);
			console.log("Next slideDot: " + nextSlideDot.id);

			currentSliderNumber.innerHTML = `0${Number(slideId) + 1}`;
			activeSlide[0].classList.remove("promo-slide--active");
			nextSlide.classList.add("promo-slide--active");

			activeSlideDot[0].classList.remove("promo-slider__dot--active");
			nextSlideDot.classList.add("promo-slider__dot--active");

			// const element = document.querySelector(".promo-slider"); TODO need to fix
			// element.style = `background-image: url("@assets/images/promo-sllider/slide-${Number(slideId) + 1}.jpg");`;
		}

		if (arrow === "promo-slider__arrow-left") {
			let slideId = activeSlide[0].id.charAt(activeSlide[0].id.length - 1);
			console.log("Slide ID: " + slideId);

			if (slideId === "1") {
				slideId = "5";
			}

			const nextSlide = document.getElementById(`promo-slide-${Number(slideId) - 1}`);
			const nextSlideDot = document.getElementById(`promo-slider__dot-${Number(slideId) - 1}`);

			console.log("Next slide: " + nextSlide.id);
			console.log("Next slideDot: " + nextSlideDot.id);

			currentSliderNumber.innerHTML = `0${Number(slideId) - 1}`;
			activeSlide[0].classList.remove("promo-slide--active");
			nextSlide.classList.add("promo-slide--active");

			activeSlideDot[0].classList.remove("promo-slider__dot--active");
			nextSlideDot.classList.add("promo-slider__dot--active");

			// const element = document.querySelector(".promo-slider"); TODO
			// element.style = `background-image: url("@assets/images/promo-sllider/slide-${Number(slideId) - 1}.jpg");`;
		}
	});
});

promoSliderDotsContainer.addEventListener("click", function (e) {
	if (e.target.classList.contains("promo-slider__dot")) {
		const targetID = e.target.id.charAt(e.target.id.length - 1);
		const currentID = activeSlide[0].id.charAt(activeSlide[0].id.length - 1);

		console.log("Clicked: " + targetID);
		currentSliderNumber.innerHTML = `0${targetID}`;

		e.target.classList.add("promo-slider__dot--active");
		navigationDots[currentID - 1].classList.remove("promo-slider__dot--active");

		activeSlide[0].classList.remove("promo-slide--active");
		promoSlides[targetID - 1].classList.add("promo-slide--active");

		// const element = document.querySelector(".promo-slider"); TODO
		// element.style = `background-image: url("@assets/images/promo-sllider/slide-${Number(targetID)}.jpg");`;
	}
});