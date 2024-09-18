// JavaScript to toggle the menu on smaller screens
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
//---------------------------------------------------------------------------------------JavaAcript for slideshow

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let slideStartX = 0;
let slideEndX = 0;
const slideIntervalTime = 10000; // 10 seconds

// Function to show a specific slide based on index
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

// Function to automatically switch slides every 10 seconds
let slideInterval = setInterval(() => {
    moveSlide(1); // Move to the next slide
}, slideIntervalTime);

// Pause and restart the interval when the user interacts with the slide
function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setIntierval(() => {
        moveSlide(1);
    }, slideIntervalTime);
}

// Swipe functionality for touch devices (slideshow)
function handleSlideTouchStart(event) {
    slideStartX = event.touches[0].clientX; // Get the initial touch position
    resetSlideInterval(); // Reset the auto-slide when a swipe starts
}

function handleSlideTouchMove(event) {
    slideEndX = event.touches[0].clientX; // Update the final touch position as the user moves their finger
}

function handleSlideTouchEnd() {
    if (slideStartX > slideEndX + 50) {
        moveSlide(1); // Swipe left (next slide)
    } else if (slideStartX < slideEndX - 50) {
        moveSlide(-1); // Swipe right (previous slide)
    }
}

// Add touch event listeners to the slideshow container
document.querySelector('.slideshow-container').addEventListener('touchstart', handleSlideTouchStart);
document.querySelector('.slideshow-container').addEventListener('touchmove', handleSlideTouchMove);
document.querySelector('.slideshow-container').addEventListener('touchend', handleSlideTouchEnd);





