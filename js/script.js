
const icons =document.querySelector(".icons")
const body =document.querySelector("body")
const close = document.querySelector(".close")
const allProducts = document.querySelector(".products") // draw in it product html

const productList =document.querySelector(".productList") // add products on it
const quantity = document.querySelector("#number")
const Total = document.querySelector(".total")
let checkOutList=[]

//////close & open cart///////////////////////////////////////////////////////////////
icons.addEventListener('click' ,()=>{
    body.classList.add("active")
    
})
close.addEventListener('click' , ()=>{
    body.classList.remove("active")

})

////////create products & draw //////////////////////////////////////////////
let ArrProducts = [
    {
        id:1,
        imageUrl : "images/product3.jpg",
        title: "Jacket",
        description:"MEN Winter Clothes",
        price:"200"
    },
    {
        id:2,
        imageUrl : "images/product4.jpg",
        title:"Water Bottle",
        description:"Steel Water Bottle",
        price:"50",
        
    },
    {
        id:3,
         imageUrl : "images/product5.jpg",
        title: "Sunglasses",
        description:"Sunglasses UV400 Classic",
        price:"70",
       
    },
    {
        id: 4 ,
        imageUrl : "images/product6.jpg",
        title:"cap",
        description:"Adidas Cotton Cap For MEN",
        price:"40"
        
    },
    {
        id: 5,
        imageUrl : "images/product7.jpg",
        title:"Bag",
        description:"Adidas MEN Backpack",
        price:"120"
        
    },
    {
        id:6,
        imageUrl : "images/product8.jpg",
        title: "shoes",
        description:"MEN Activ skechers Shoes", 
        price:"150"
    }
]

function drawItems(){
    let y = ArrProducts.map((item ,key) => 
         `<div class="card col-lg-3 col-md-4 col-sm-12">
            <img src="${item.imageUrl}" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">${item.description}</p>
                  <p class="card-text">$${item.price}</p>
                  <div class="card-info d-flex justify-content-between align-items-center">
                    <button class="addToCartbtn btn btn-primary" onclick="addToCart(${key})">Add to Card</button>
                    <i class="far fa-heart favbtn"></i>
                   </div>
                </div>
        </div>`
        
    )
    allProducts.innerHTML = y;
}
drawItems ();

// add products to cart with title and count them ///////////////////////////////////////////////////
const addToCart =(id) => {
    if(localStorage.getItem('first') && localStorage.getItem('email') && localStorage.getItem('password')){

    if(checkOutList[id] == null ){
        checkOutList[id] = ArrProducts[id];
        checkOutList[id].quantity = 1;
    
    }else{
        checkOutList[id].quantity += 1;
        
    }
    localStorage.setItem('items',JSON.stringify(checkOutList));
    
    }
    reloadCart();
        
}
// draw products that want buy it///////////////////////////////////////////////////////////////////////////////
function reloadCart(){
    productList.innerHTML = "";
    let count = 0;
    let TotalPrice = 0;

    checkOutList.forEach(( item ,key) => {
        TotalPrice += parseInt(item.price *item.quantity) 
        count += item.quantity;

        let li =document.createElement("li")
        li.innerHTML =`
        <img src="${item.imageUrl}">
        <div>${item.title}</div>
        <div>$${item.price}</div>
        <div class="btns">
          <button class="minus" onclick="changeBadge( ${key} ,${item.quantity-1})">-</button>
          <div class="count">${item.quantity}</div>
          <button class="plus" onclick="changeBadge( ${key} ,${item.quantity+1})">+</button>
        </div>`  

        productList.appendChild(li)
       
    });
    Total.innerHTML =`<small>Subtotal(${count} items)</small>:$${TotalPrice}`;
    quantity.innerHTML = count;
   
}
// ///////////////////////////////////////////////////////////////
function changeBadge(key ,quantity){
    if(quantity == 0){
        delete checkOutList[key];
        localStorage.setItem('items' ,JSON.stringify(checkOutList));
        
    }else{
        checkOutList[key].quantity = quantity; 
    } 
    
    reloadCart();
}
// //////////////////////////////////////////////////////////



 


