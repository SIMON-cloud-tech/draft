document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".video-card");
    let index = 0, slideCount = window.innerWidth > 768 ? 3 : 2;

    function autoSlide() {
        cards.forEach(card => card.style.opacity = "0.37"); // Fade out
        setTimeout(() => {
            for (let i = index; i < index + slideCount; i++) {
                if (cards[i]) cards[i].style.opacity = "2"; // Fade in
            }
            index = (index + slideCount) % cards.length;
        }, 500);
    }
    setInterval(autoSlide, 1000); // Adjust slide timing
    autoSlide(); // Initial slide

    function autoSlide() {
        cards.forEach(card => card.style.opacity = "0.70"); // Fade out
        setTimeout(() => {
            for (let i = index; i < index + slideCount; i++) {
                if (cards[i]) cards[i].style.opacity = "3"; // Fade in
            }
            index = (index + slideCount) % cards.length;
        }, 500);
    }
    setInterval(autoSlide, 1500); // Adjust slide timing
    autoSlide(); // Initial slide


    function autoSlide() {
        cards.forEach(card => card.style.opacity = "1.30"); // Fade out
        setTimeout(() => {
            for (let i = index; i < index + slideCount; i++) {
                if (cards[i]) cards[i].style.opacity = "6"; // Fade in
            }
            index = (index + slideCount) % cards.length;
        }, 500);
    }
    setInterval(autoSlide, 2000); // Adjust slide timing
    autoSlide(); // Initial slide
});