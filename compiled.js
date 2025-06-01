document.addEventListener("DOMContentLoaded", function () {
    // Variables
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

    // Auto-slide background images every 2.5 seconds
    setInterval(function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.querySelector(".background-container .image img").src = images[currentImageIndex];
    }, 2500);
});

// Testimonials Auto-Slide
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

// Auto-slide testimonials every 3 seconds
setInterval(nextTestimonial, 3000);
showTestimonial(currentIndex);
nextBtn.addEventListener("click", nextTestimonial);
prevBtn.addEventListener("click", prevTestimonial);

// Service Cards Auto-Slide
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".services-container");
    const cards = document.querySelectorAll(".service");

    let index = 0;
    function slideCards() {
        index = (index + 1) % (cards.length - 2); 
        container.style.transform = `translateX(-${index * 33.33}%)`;
    }

    setInterval(slideCards, 3000);
});

// Shopping Cart Management
let cart = [];
let totalAmount = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    totalAmount += itemPrice;
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach((item, index) => {
        cartDiv.innerHTML += `
            <p>${item.name} - KSH${item.price} 
            <button onclick="removeFromCart(${index})">X</button>
            </p>`;
    });
    document.getElementById('total').innerText = `Total: KSH${totalAmount}`;
}

function filterProducts() {
    const searchBar = document.getElementById('searchBar').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.dataset.name.toLowerCase();
        product.style.display = productName.includes(searchBar) ? "block" : "none";
    });
}

function removeFromCart(index) {
    totalAmount -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function saveData() {
    localStorage.setItem('data', JSON.stringify(cart));
}

// Mpesa Checkout
async function checkout() {
    const apiKey = "API_KEY"; // Replace with actual API key
    const paybillNumber = "123456"; // Replace with actual Paybill number

    const requestBody = {
        amount: totalAmount,
        paybill: paybillNumber,
        cartDetails: cart,
    };

    try {
        const response = await fetch("https://mock-mpesa-api.com/pay", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(requestBody),
        });

        if (response.ok) {
            const data = await response.json();
            alert(`Payment successful! Transaction ID: ${data.transactionId}`);
        } else {
            alert("Payment failed. Please try again.");
        }
    } catch (error) {
        console.error("Error during payment:", error);
        alert("An error occurred during payment.");
    }
}

// Contact Form Submission
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn3").addEventListener("click", submitMessage);
});

function submitMessage() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("erromessage");

    if (!email || !message) {
        errorMessage.innerText = "Please enter a valid email and message!";
        return;
    }

    // Send the message to the backend
    fetch("http://yourserver.com/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Your message has been sent successfully!");
        } else {
            errorMessage.innerText = "Error sending message, try again!";
        }
    })
    .catch(err => {
        console.error("Message send error:", err);
        errorMessage.innerText = "Server error. Try later!";
    });
}
