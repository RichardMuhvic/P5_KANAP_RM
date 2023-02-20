let productLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productLocalStorage);



// Création de la boucle for, pour tout poroduit existant dans el panier alors :
function productPanier(productLocalStorage) {
    for (let i = o; i < productLocalStorage.length; i++) {
        console.log(productLocalStorage[i]);
        
        const cartItem = document.querySelector("#cart__items");
        const cartImage = document.querySelector(".cart__item__img");
        const cartDescription = document.querySelector("cart__item__content");
        const cartQuantity = document.querySelector("cart__item__content__settings__quantity");
        //const cartDelete = document.querySelector(".cart__item__content__settings__delete");
        
        let productCartItem = document.createElement("article");
        let productCartImage = document.createElement("img");
        let productCartDescription = document.createElement("div");
        let productCartQuantity = document.createElement("div");
        //let productCartDelete = document.createElement("div");
        
        productCartItem = productLocalStorage[i].productID;
        productCartImage.src = productLocalStorage[i].imageUrl;
        productCartDescription = productLocalStorage[i].description;
        productCartQuantity = productLocalStorage[i].productQuantity;
        //productCartDelete = productLocalStorage
        
        cartItem.appendChild(productCartItem);
        cartImage.appendChild(productCartImage);
        cartDescription.appendChild(productCartDescription);
        cartQuantity.appendChild(productCartQuantity);

        console.log(cartItem);
    };
};