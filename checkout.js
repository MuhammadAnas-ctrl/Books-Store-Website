// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItemsDiv = document.getElementById("cartItems");

// Show cart items
function showCart() {
  cartItemsDiv.innerHTML = "";

  cart.forEach(item => {
    cartItemsDiv.innerHTML += `
      <p>${item.name} — Qty: ${item.quantity}</p>
    `;
  });
}
showCart();

// WhatsApp Order Submit
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;

  let message = `Hello, my name is ${name}.%0A%0A`;
  message += `I want to order:%0A`;

  cart.forEach(item => {
    message += `- ${item.name} (Qty: ${item.quantity})%0A`;
  });

  message += `%0AAddress: ${address}, ${city}`;
  message += `%0APhone: ${phone}`;

  let whatsappNumber = "03294847025"; // <-- PUT CLIENT NUMBER HERE

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
});






