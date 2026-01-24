let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const checkoutList = document.querySelector(".checkoutList");
const checkoutTotal = document.querySelector(".checkoutTotal");

// Load and render checkout list
function loadCheckout() {
  checkoutList.innerHTML = "";
  let totalPrice = 0;
  let count = 0;

  cartItems.forEach((item, index) => {
    if(item != null){
      totalPrice += item.price * item.quantity;
      count += item.quantity;

      const li = document.createElement("li");
      li.innerHTML = `
        <img src="images/${item.image}" alt="${item.name}" />
        <div class="name">${item.name}</div>
        <div class="quantityContainer">
          <button onclick="changeQuantity(${index}, ${item.quantity - 1})">-</button>
          <div class="quantity">${item.quantity}</div>
          <button onclick="changeQuantity(${index}, ${item.quantity + 1})">+</button>
        </div>
        <button class="removeBtn" onclick="removeItem(${index})">🗑️</button>
      `;
      checkoutList.appendChild(li);
    }
  });

  checkoutTotal.innerHTML = `Subtotal (${count} items): ₹${totalPrice}`;
}

// Remove item
function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  loadCheckout();
}

// Change quantity
function changeQuantity(index, newQuantity) {
  if(newQuantity <= 0){
    removeItem(index);
  } else {
    cartItems[index].quantity = newQuantity;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    loadCheckout();
  }
}

loadCheckout();

const placeOrderBtn = document.getElementById("placeOrderBtn");



function placeOrder() {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // 🛑 If cart is empty
  if (cartItems.length === 0) {
    alert("🛒 Your cart is empty!");
    return;
  }

  // Customer details
  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let address = document.getElementById("address").value.trim();
  let city = document.getElementById("city").value.trim();

  if (!name || !phone || !address || !city) {
    alert("⚠️ Please fill all details");
    return;
  }

  // Generate Customer ID
  let customerId = "ORD" + Date.now();

  let message = `🛍️ *New Order Received*\n\n`;
  message += `🆔 Order ID: ${customerId}\n`;
  message += `👤 Name: ${name}\n`;
  message += `📞 Phone: ${phone}\n`;
  message += `🏠 Address: ${address}\n 🏙️ City: ${city}\n\n`;
  message += `📚 *Order Items:*\n`;

  let total = 0;

  cartItems.forEach(item => {
    if (item) {
      let sub = item.price * item.quantity;
      total += sub;
      message += `• ${item.name} × ${item.quantity} = ₹${sub}\n`;
    }
  });

  message += `\n💰 *Total Amount:* ₹${total}\n`;
  message += `\nThank you for your order 😊`;

  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp number (OWNER)
  let ownerNumber = "03021206595"; // replace with your number

  window.open(`https://wa.me/${ownerNumber}?text=${encodedMessage}`, "_blank");


  // Clear cart
  localStorage.removeItem("cartItems");
}






/*
// Generate a simple customer ID
function generateCustomerID() {
  return 'CUST-' + Math.floor(1000 + Math.random() * 9000);
}

placeOrderBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent form submission

  // Get customer details
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();

  if (!name || !phone || !address || !city) {
    alert("Please fill all details!");
    return;
  }

  // Get cart items
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  if(cartItems.length === 0){
    alert("Your cart is empty!");
    return;
  }

  // Generate customer ID
  const customerID = generateCustomerID();

  // Build message
  let message = `🛒 *New Order Received*\n`;
  message += `Customer ID: ${customerID}\n`;
  message += `Name: ${name}\n`;
  message += `Phone: ${phone}\n`;
  message += `Address: ${address}\n`;
  message += `City: ${city}\n\n`;
  message += `📚 *Order Details:*\n`;

  let subtotal = 0;
  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.name} × ${item.quantity} = ₹${item.price * item.quantity}\n`;
    subtotal += item.price * item.quantity;
  });

  message += `\n💰 Subtotal: ₹${subtotal}`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // Your WhatsApp number (replace with your number with country code, no + or 0)
  const yourNumber = "03021206595"; // Example: 919876543210 for India

  // Open WhatsApp link
  window.open(`https://wa.me/${yourNumber}?text=${encodedMessage}`, "_blank");
});
      */                                                             
