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
    slideInterval = setInterval(() => {
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


// --------------------------------------------------------------------- Collapsible content for coordinadores

document.addEventListener("DOMContentLoaded", function() {
    // Select all the buttons that toggle the collapsible content
    const toggleButtons = document.querySelectorAll('.collapse-toggle');

    // Loop through each toggle button
    toggleButtons.forEach(button => {
        // Add an event listener to each button for the click event
        button.addEventListener('click', function() {
            // Get the closest .coordinador-box parent of the clicked button
            const coordinadorBox = this.closest('.coordinador-box');
            
            // Toggle the 'expanded' class on the .coordinador-box
            coordinadorBox.classList.toggle('expanded');
            
            // Toggle button text based on the expanded state
            if (coordinadorBox.classList.contains('expanded')) {
                this.textContent = "Leer menos";  // If expanded, change to "Leer menos"
            } else {
                this.textContent = "Leer más";  // If collapsed, change to "Leer más"
            }
        });
    });
});

// --------------------------------------------------------------------- Carousel Functionality for "objetivos convocatoria"

let currentConv = 0;
let carouselStartX = 0;
let carouselEndX = 0;

const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const totalItems = items.length;

// Carousel functionality
function updateCarousel() {
    const offset = -currentConv * 100;
    items.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });
    updateDots();
}

// Dots functionality
function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentConv].classList.add('active');
}

// Move to the next slide
function nextSlide() {
    currentConv = (currentConv + 1) % totalItems;
    updateCarousel();
}

// Move to the previous slide
function prevSlide() {
    currentConv = (currentConv - 1 + totalItems) % totalItems;
    updateCarousel();
}

// Handle dot clicks
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentConv = index;
        updateCarousel();
    });
});

// Handle touch start (carousel)
document.querySelector('.carousel').addEventListener('touchstart', (e) => {
    carouselStartX = e.touches[0].clientX;
});

// Handle touch move (carousel)
document.querySelector('.carousel').addEventListener('touchmove', (e) => {
    carouselEndX = e.touches[0].clientX;
});

// Handle touch end (determine swipe direction for carousel)
document.querySelector('.carousel').addEventListener('touchend', () => {
    if (carouselStartX > carouselEndX + 50) {
        nextSlide(); // Swipe left, next slide
    } else if (carouselStartX < carouselEndX - 50) {
        prevSlide(); // Swipe right, previous slide
    }
});


