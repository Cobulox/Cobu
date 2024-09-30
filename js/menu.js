const btnMenu = document.querySelector('.btn-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const overlayLinks = document.querySelectorAll('.menu-overlay ul.overlay-menu li a');

// Function to toggle the overlay menu
function toggleMenu() {
    menuOverlay.classList.toggle('active');

    // Toggle body scrolling when the menu is active
    if (menuOverlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden'; // Disable body scrolling
        btnMenu.innerHTML = "Clse"; // Switch to "Clse" when open
    } else {
        document.body.style.overflow = 'auto'; // Re-enable body scrolling
        btnMenu.innerHTML = "Menu"; // Switch back to "Menu" when closed
    }
}

// Event listener for button click
btnMenu.addEventListener('click', toggleMenu);

// Close the menu when any link is clicked
overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuOverlay.classList.contains('active')) {
            toggleMenu(); // Close the menu when a link is clicked
        }
    });
});
