
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

function reloadCart(){
  productList.innerHTML = "";

  let count = 0;
  let totalPrice = 0;

  checkOutList.forEach((item,key)=>{

    totalPrice+= parseInt(item.price*item.quantity)

    count +=item.quantity;
    console.log(item)
    let li = document.createElement("li")
    li.innerHTML = `
    <img src = "images/${item.image}"/>
    <div>${item.name}</div>
    <div>${item.price}</div>
    <div>
    <button onclick="changeQuantity(${key},${item.quantity-1})">-</button>
    <div class="count" >${item.quantity}</div>
    <button onclick="changeQuantity(${key},${item.quantity+1})">+</button>
    </div>
    `;
    productList.appendChild(li)
  })
total.innerHTML = `<small>Subtotal (${count} items) ₹</small>`+totalPrice;
  quantity.innerHTML = count;
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

function Subscribee(){
const Sub = document.querySelector("#Subscribe");
const name = document.querySelector("#Name");

let code_val = Math.floor(Math.random() * 10000);
let code = `Customers Id is : ${code_val}`

  Email.send({
    SecureToken: "6925d185-3a88-49b9-8d58-2232738695fa",
    To: "flashycoderch@gmail.com",
    From: "flashycoderch@gmail.com",
    Subject: `${Sub.value} has Subscribed`,
    Body: `
    <h3>${code}</h3><br><br>
    <h3>A person has Subscribed you</h3> <br>
    <h2>Name: ${Sub.value}</h2> <br>
    <h2>Email : ${name.value}</h2>
    `,
  }).then((message) =>{
    if(message === "OK"){
      alert("Successfully Subscribed")
    }
    else{
      alert("Failed to Subscribe")
    }
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
}

