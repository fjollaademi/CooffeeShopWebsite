function addToCart(name, price){

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

    alert(name + " added to cart!");
}

function subscribeNewsletter(){

    let email =
    document.getElementById("email").value;

    if(email === ""){
        alert("Please enter an email.");
        return;
    }

    alert(
        "Thank you for subscribing, " + email
    );

    document.getElementById("email").value="";
}