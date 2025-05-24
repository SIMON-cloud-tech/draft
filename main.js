let cart = [];
let totalAmount = 0;

//ADD ITEMS TO THE CART//
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    totalAmount += itemPrice;
    updateCart();
}
//UPDATE CART DISPLAY DYNAMICALLY//
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
//FILTERING ELEMENTS USING SEARCHBAR//
function filterProducts() {
    const searchBar = document.getElementById('searchBar').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.dataset.name.toLowerCase();
        if (productName.includes(searchBar)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
//REMOVING ITEMS FROM CART//
function removeFromCart(index) {
    totalAmount -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}
//SAVING DATA///
function saveData(){
    localStorage.setItem('data', cart.innerHTML);
}

//COMPLETE PAYMENT VIA MPESA//
async function checkout() {
    const apiKey = "API KEY"; //OWNERS API KEY//
    const paybillNumber = "123456"; //OWNERS PAYBILL NUMBER//

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

