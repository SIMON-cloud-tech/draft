document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.getElementById("nav-links");
    const toggleBtn = document.getElementById("toggle-btn");
    const images = ["image4.jpg", "image2.jpg", "image8.jpg", "image3.jpg", "image6.jpg"];
    let currentImageIndex = 0;

    // Ensure menu icon always appears on mobile
    menuIcon.style.display = "block"; 

    // Toggle menu visibility on mobile devices
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Toggle background image on button click
    toggleBtn.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.querySelector(".background-container .image img").src = images[currentImageIndex];
    });

    // Auto-slide background images every 4 seconds
    setInterval(function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.querySelector(".background-container .image img").src = images[currentImageIndex];
    }, 2500);
});
