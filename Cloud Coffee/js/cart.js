let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const cartItems =
document.getElementById("cartItems");

const totalDiv =
document.getElementById("total");

function renderCart(){

if(cart.length === 0){

cartItems.innerHTML = `
<p class="empty">
Your cart is empty.
</p>
`;

totalDiv.innerHTML = "";

return;
}

let total = 0;

cartItems.innerHTML = "";

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-item">

<div>

<h3>${item.name}</h3>

<p>$${item.price}</p>

</div>

<button
class="remove-btn"
onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

totalDiv.innerHTML =
"Total: $" + total.toFixed(2);

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

}

function checkout(){

if(cart.length===0){

alert("Cart is empty.");

return;

}

window.location.href =
"checkout.html";

}

renderCart();