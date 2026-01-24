let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const checkoutList = document.querySelector(".checkoutList");
const checkoutTotal = document.querySelector(".checkoutTotal");

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
        <img src="images/${item.image}" alt="${item.name}" />
        <div class="name">${item.name}</div>
        <div class="quantity">Quantity: ${item.quantity}</div>
      `;
      checkoutList.appendChild(li);
    }
  });

  checkoutTotal.innerHTML = `Subtotal (${count} items): ₹${totalPrice}`;
}

loadCheckout();
