console.log('hello there');
console.log('nothing to see here.. Move along')

// const slides = document.getElementsByClassName("carousel-item");
// const nextButton = document.getElementById("carousel-button-next");
// const prevButton = document.getElementById("carousel-button-prev");
// const dots = document.getElementsByClassName("dot");
// let position = 0;
// const numberOfSlides = slides.length;

// function hideAllSlides() {
//     // remove all slides not currently being viewed
//     for (const slide of slides) {
//         slide.classList.remove("carousel-item-visible");
//         slide.classList.add("carousel-item-hidden");
//     }
// }


// const handleMoveToNextSlide = function(e) {
//     hideAllSlides();
  
//     // check if last slide has been reached
//     if (position === numberOfSlides - 1) {
//         position = 0; // go back to first slide
//     } else {
//         // move to next slide
//         position++;
//     }
//     // make current slide visible
//     slides[position].classList.add("carousel-item-visible");
  
//     // update dot to represent current slide
//     dots[position].classList.add("selected-dot");
//     dots[position].checked = true;
// }

// const handleMoveToPrevSlide = function(e) {
//     hideAllSlides();
    
//     // check if we're on the first slide
//     if (position === 0) {
//         position = numberOfSlides - 1; // move to the last slide
//     } else {
//         // move back one
//         position--;
//     }
//     // make current slide visible
//     slides[position].classList.add("carousel-item-visible");
  
//     // update dot to represent current slide
//     dots[position].classList.add("selected-dot");
//     dots[position].checked = true;
// }

// // listen for slide change events
// nextButton.addEventListener("click", handleMoveToNextSlide);
// prevButton.addEventListener("click", handleMoveToPrevSlide);