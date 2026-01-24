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
