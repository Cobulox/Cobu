window.addEventListener("scroll", function () {
    const footer = document.getElementById('footer');
    const instagramImage = document.querySelector('#contact  img[src="images/contact/instagram.png"]'); // Target the Instagram image

    // Get the position of the Instagram image relative to the viewport
    const instagramRect = instagramImage.getBoundingClientRect();
    
    // Get the window height (viewport height)
    const windowHeight = window.innerHeight;

    // Check if the Instagram image is in view
    if (instagramRect.top <= windowHeight && instagramRect.bottom >= 0) {
        // Hide the footer when the Instagram image is visible in the viewport
        footer.style.transform = `translateY(${footer.offsetHeight}px)`;
    } else {
        // Show the footer when the Instagram image is not in view
        footer.style.transform = 'translateY(0)';
    }
});

