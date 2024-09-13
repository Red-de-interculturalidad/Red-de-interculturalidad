// JavaScript to toggle the menu on smaller screens
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
//JavaAcript for slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Loop back to the last slide
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? 'block' : 'none';
    });
}

// Function to move between slides
function moveSlide(n) {
    showSlide(currentSlide + n);
}

// Initialize the slideshow
showSlide(currentSlide);
