document.getElementById('menuIcon').addEventListener('click', function(event){
    document.getElementById('nav-links').classList.toggle('active');
});

//FUNCTION TO AUTOSLIDE THE TESTIMONIALS BEGINS//

let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? "block" : "none";
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

// Automatic sliding every 1 seconds
setInterval(nextTestimonial, 3000);

// Initial display
showTestimonial(currentIndex);

nextBtn.addEventListener("click", nextTestimonial);
prevBtn.addEventListener("click", prevTestimonial);

// FUNCTION TO ASCERTAIN AUTO SLIDE EFFECTS FOR TYESTIMONIALS ENDS//

//FUNCTION TO AUTOMATICALLY TOGGLE BETWEEN IMAGES//
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg"
    ];
    const backgroundContainer = document.querySelector(".background-container");
    const toggleButton = document.getElementById("toggle-btn");

    let index = 0;
    let manualToggle = false;

    function changeBackground () {
        backgroundContainer.style.backgroundImage = 'url({images[index]})';
        index = (index + 1) % images.length;
    }

    toggleButton.addEventListener("click", () => {
        manualToggle = true;
        changeBackground();
        setTimeout( () => {
            manualToggle = false; //Allow auto sliding again after manual change
        }, 5000); //Adjust delay before auto-sliding resumes
    });
    setInterval( () => {
        if(!manualToggle){
            changeBackground();
        }
    }, 3000); //Auto change every 3seconds
})



//FUNCTION TO  AUTO SLIDE THE SERVICES CARDS  STARTS HERE//
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".services-container");
    const cards = document.querySelectorAll(".servicee");

    let index = 0;
    function slideCards() {
        index++;
        if(index > cards.length - 3){
            index = 0;
        };
        container.style.transform = 'translateX (-${index * 33.33}%)';
    }
    setInterval(slideCards, 3000); //Allow auto slide of cards after every 3 seconds
});
