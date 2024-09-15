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

// Colapsable content coordinadores
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
                this.textContent = "Read Less";  // If expanded, change to "Read Less"
            } else {
                this.textContent = "Read More";  // If collapsed, change to "Read More"
            }
        });
    });
});

