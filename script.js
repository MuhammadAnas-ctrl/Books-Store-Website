
let ArrProducts = [
  {
    id: 1,
    name: "Product 1",
    image: "img1.png",
    price: "1000",
    rating: 5,
  },
  {
    id: 2,
    name: "Product 2",
    image: "img2.png",
    price: "700",
    rating: 4,
  },
  {
    id: 3,
    name: "Product 3",
    image: "img3.png",
    price: "3500",
    rating: 5,
  },
  {
    id: 4,
    name: "Product 4",
    image: "img4.png",
    price: "1500",
    rating: 3,
  },
  {
    id: 5,
    name: "Product 5",
    image: "img5.png",
    price: "2500",
    rating: 4,
  },
  {
    id: 6,
    name: "Product 6",
    image: "img6.png",
    price: "900",
    rating: 3,
  },
];
// console.log(ArrProducts);




const searchInput = document.querySelector('.search-input');
const productsContainer = document.querySelector('.products'); // Change this to your actual list class

// 1. Function to Display Products
function displayProducts(products) {
  // Clear the current list
  productsContainer.innerHTML = "";

  // If no products found
  if (products.length === 0) {
    productsContainer.innerHTML = `<p style="text-align:center; color:#6F4E37;">No books found matching that search. 📚</p>`;
    return;
  }

  // Map through filtered products and inject HTML
  products.forEach(product => {
    productsContainer.innerHTML = `
        <img src = "images/${item.image}"/>
        <div class="name">${item.name}</div>
        <div>${star}</div>
        <div class="price">${item.price} <small>💲</small></div>
        <button onClick="addtoCart(${key})"><i class="fa fa-cart-plus"></i>Add to Cart</button>
        `;
        products.appendChild(productsContainer)
  });
}

// 2. Search Event Listener
searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase(); // Get user input
  
  // Filter the ArrProducts array
  const filteredProducts = ArrProducts.filter(product => {
    return product.name.toLowerCase().includes(value);
  });

  // Re-display only the filtered products
  displayProducts(filteredProducts);
});

// Initial display on page load
displayProducts(ArrProducts);









const body = document.querySelector("body"),
  products = document.querySelector(".products"),
  shoppingBasket = document.querySelector(".shoppingBasket"),
  closeCart = document.querySelector(".close"),
  productList = document.querySelector(".productList"),
  quantity = document.querySelector(".quantity"),
  total = document.querySelector(".total"),
  checkk = document.querySelector(".checkk"),
  Para = document.querySelector(".Para");

let checkOutList = JSON.parse(localStorage.getItem("cartItems")) || [];
function saveCart() {
  localStorage.setItem("cartItems", JSON.stringify(checkOutList));
}

function updateCheckoutButton() {
  if (quantity.innerHTML == 0) {
    checkk.disabled = true;
    checkk.style.opacity = "0.5";
    checkk.style.cursor = "not-allowed";
  } else {
    checkk.disabled = false;
    checkk.style.opacity = "1";
    checkk.style.cursor = "pointer";
  }
}






shoppingBasket.onclick=()=>{
  body.classList.add("active")
}
closeCart.onclick=()=>{
  body.classList.remove("active")
}
checkk.addEventListener("click",()=>{
  window.open("checkout.html", "_self")
})
function onInIt(){
    ArrProducts.forEach((item,key)=>{
        let div = document.createElement("div")
        div.classList.add("item")

        let star = "";

        for (i = 0; i < item.rating; i++) {
          star += `<i class="fa fa-star"></i>`
        }


        div.innerHTML = `
        <img src = "images/${item.image}"/>
        <div class="name">${item.name}</div>
        <div>${star}</div>
        <div class="price">${item.price} <small>💲</small></div>
        <button onClick="addtoCart(${key})"><i class="fa fa-cart-plus"></i>Add to Cart</button>
        `;
        products.appendChild(div)
    })
}
onInIt()


function addtoCart(Id){
  if(checkOutList[Id] == null){
    checkOutList[Id] = ArrProducts[Id];
    checkOutList[Id].quantity = 1;
  } else {
    checkOutList[Id].quantity += 1;
  }

  reloadCart();
}


function reloadCart() {
  productList.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  checkOutList.forEach((item, key) => {
    if (item != null) {
      totalPrice += item.price * item.quantity;
      count += item.quantity;

      let li = document.createElement("li");
      li.innerHTML = `
        <img src="images/${item.image}" />
        <div class="name">${item.name}</div>

        <div class="quantityContainer">
          <button onclick="changeQuantity(${key}, ${item.quantity - 1})">-</button>
          <div class="quantity">${item.quantity}</div>
          <button onclick="changeQuantity(${key}, ${item.quantity + 1})">+</button>
        </div>

        <button class="removeBtn" onclick="removeItem(${key})">🗑️</button>
      `;
      productList.appendChild(li);
    }
  });

  total.innerHTML = `<small>Subtotal (${count} items) ₹</small>` + totalPrice;
  quantity.innerHTML = count;

  saveCart();
  updateCheckoutButton();
}


// Remove item
function removeItem(key){
  delete checkOutList[key];
  reloadCart();
}


function changeQuantity(key, quantity){
  if(quantity <= 0){
    delete checkOutList[key];
  } else {
    checkOutList[key].quantity = quantity;
  }
  reloadCart();
}

checkk.addEventListener("click", () => {
  if (quantity.innerHTML == 0) {
    alert("🛒 Cart is empty! Please add items first.");
    return;
  }

  // Cart already saved via reloadCart()
  window.open("checkout.html", "_self");
});



window.addEventListener("DOMContentLoaded", () => {
  reloadCart();
});













  // Email.send({
  //   Host: "smtp.elasticemail.com",
  //   Username: "flashycoderch@gmail.com",
  //   Password: "17E02C5E468429AD15A427B9A06DE5F72A15",
  //   To: "flashycoderch@gmail.com",
  //   From: "flashycoderch@gmail.com",
  //   Subject: "This is the subject",
  //   Body: "And this is the body",
  // }).then((message) => alert(message));
// }

