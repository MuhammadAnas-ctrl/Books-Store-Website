
let ArrProducts = [
  {
    id: 1,
    name: "HTML",
    image: "img1.png",
    price: "1000",
    rating: 5,
  },
  {
    id: 2,
    name: "CSS",
    image: "img2.png",
    price: "2000",
    rating: 4,
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    image: "img3.png",
    price: "5000",
    rating: 5,
  },
  {
    id: 4,
    name: "JQUERY",
    image: "img4.png",
    price: "3000",
    rating: 3,
  },
  {
    id: 5,
    name: "REACT",
    image: "img5.png",
    price: "5000",
    rating: 4,
  },
  {
    id: 6,
    name: "ANGULAR",
    image: "img6.png",
    price: "4000",
    rating: 3,
  },
];
// console.log(ArrProducts);

const body = document.querySelector("body"),
  products = document.querySelector(".products"),
  shoppingBasket = document.querySelector(".shoppingBasket"),
  closeCart = document.querySelector(".close"),
  productList = document.querySelector(".productList"),
  quantity = document.querySelector(".quantity"),
  total = document.querySelector(".total"),
  checkk = document.querySelector(".checkk"),
  Para = document.querySelector(".Para");

let checkOutList = []

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
        <div class="price"><small>₹</small>${item.price}</div>
        <button onClick="addtoCart(${key})"><i class="fa fa-cart-plus"></i>Add to Cart</button>
        `;
        products.appendChild(div)
    })
}
onInIt()


function addtoCart(Id){
    // console.log(ArrProducts[Id]);
    if(checkOutList[Id] == null){
        checkOutList[Id] = ArrProducts[Id];

        checkOutList[Id].quantity = 1
    }
    else{
      checkOutList[Id].quantity +=1
    }
    reloadCart()
}

function reloadCart() {
  productList.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  checkOutList.forEach((item, key) => {
    if(item != null){
      totalPrice += item.price * item.quantity;
      count += item.quantity;

      let li = document.createElement("li");
      li.innerHTML = `
        <img src="images/${item.image}" />
        <div class="name">${item.name}</div>
        <div class="quantityContainer">
          <button onclick="changeQuantity(${key},${item.quantity - 1})">-</button>
          <div class="quantity">${item.quantity}</div>
          <button onclick="changeQuantity(${key},${item.quantity + 1})">+</button>
        </div>
        <button class="removeBtn" onclick="removeItem(${key})">🗑️</button>
      `;
      productList.appendChild(li);
    }
  });

  total.innerHTML = `<small>Subtotal (${count} items) ₹</small>` + totalPrice;
  quantity.innerHTML = count;
}

// Remove item
function removeItem(key){
  delete checkOutList[key];
  reloadCart();
}

function changeQuantity(key,quantity){
  if(quantity == 0){
    delete checkOutList[key];
    }
    else{
      checkOutList[key].quantity=quantity;
    }
    reloadCart()
}

checkk.addEventListener("click", () => {
  // Save cart to localStorage
  localStorage.setItem("cartItems", JSON.stringify(checkOutList));

  // Go to checkout page
  window.open("checkout.html", "_self");
});

checkk.addEventListener("click", () => {
  // Filter out any deleted items (in case some indices are null)
  const cartHasItems = checkOutList.some(item => item != null);

  if (!cartHasItems) {
    alert("Your cart is empty! Please add some books before checkout.");
    return; // stop execution, don't open checkout page
  }

  // If cart has items, open checkout page
  window.open("checkout.html", "_self");
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

