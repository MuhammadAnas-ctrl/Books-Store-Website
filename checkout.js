// Get cart from localStorage
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Elements
const checkoutList = document.querySelector(".checkoutList"); // ul or div to show cart
const checkoutTotal = document.querySelector(".checkoutTotal"); // element to show total

function loadCheckout() {
  checkoutList.innerHTML = "";
  let totalPrice = 0;
  let count = 0;

  cartItems.forEach((item) => {
    if(item != null){
      totalPrice += item.price * item.quantity;
      count += item.quantity;

      const li = document.createElement("li");
      li.innerHTML = `
        <img src="images/${item.image}" />
        <div>${item.name}</div>
        <div>₹${item.price}</div>
        <div>Quantity: ${item.quantity}</div>
      `;
      checkoutList.appendChild(li);
    }
  });

  checkoutTotal.innerHTML = `<strong>Subtotal (${count} items): ₹${totalPrice}</strong>`;
}

loadCheckout();
