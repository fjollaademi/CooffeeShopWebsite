const products = [

{
name:"Americano",
price:4.99,
category:"coffee",

image:
"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700"
},

{
name:"Cappuccino",
price:5.99,
category:"coffee",

image:
"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700"
},

{
name:"Latte",
price:6.49,
category:"coffee",

image:
"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700"
},

{
name:"Tiramisu",
price:7.99,
category:"dessert",

image:
"https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=700"
},

{
name:"Cheesecake",
price:6.99,
category:"dessert",

image:
"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700"
},

{
name:"Iced Coffee",
price:5.49,
category:"cold",

image:
"https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=700"
}

];

const productsContainer =
document.getElementById("products");

function displayProducts(list){

productsContainer.innerHTML = "";

list.forEach(product=>{

productsContainer.innerHTML += `

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>Premium CloudCafe Product</p>

<span>$${product.price}</span>

<button onclick="addToCart(
'${product.name}',
${product.price}
)">
Add To Cart
</button>

</div>

`;

});

}

function filterProducts(category){

if(category==="all"){

displayProducts(products);

return;

}

const filtered =
products.filter(
product=>product.category===category
);

displayProducts(filtered);
}

function addToCart(name,price){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name:name,
price:price
});

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(name + " added to cart");
}

displayProducts(products);