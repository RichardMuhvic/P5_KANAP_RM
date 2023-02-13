let urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
const productID = urlParams.get("id");
console.log(productID);


fetch(`http://localhost:3000/api/products/${productID}`)
    .then((res) => res.json())
    .then((product) => {
        productId(product);
        //console.log(product);
    })
    .catch(function(err) { 
        console.log("Impossible de récupérer les données du produit", err);
    });


function productId(product) {
    const sectionImage = document.querySelector(".item__img");
    const sectionTitle = document.querySelector("#title");
    const sectionPrice = document.querySelector("#price");
    const sectionDescription = document.querySelector("#description");


    let productImage = document.createElement('img');
    let productTitle = document.createElement("h1");
    let productPrice = document.createElement("p");
    let productDescription = document.createElement("p");

    productImage.src = product.imageUrl;
    productTitle.innerText = product.name;
    productPrice.innerText = product.price;
    productDescription.innerText = product.description;

    let selectColor = product.colors;
    for( let color of selectColor) {
        let optionColor = document.createElement("option");
        optionColor.value = color;
        optionColor.innerText = color;
        document.getElementById("colors").appendChild(optionColor);
    }

    sectionImage.appendChild(productImage);
    sectionTitle.appendChild(productTitle);
    sectionPrice.appendChild(productPrice);
    sectionDescription.appendChild(productDescription);
};


// Création de addEventListener pour envoyer le produit au click du bouton "'ajout au panier" :
document.querySelector("#addToCart").addEventListener("click", (event) => {
    event.preventDefault();
    // Création des variables :
    let productTitle = document.querySelector("#title").innerText;
    let productImage = document.querySelector(".item__img").src;
    let productPrice = document.querySelector("#price").innerText;
    let productQuantity = document.querySelector('#quantity').value;
    let productColors = document.querySelector("#colors").value;

    // Création de l'objet à rajouter au panier :
    let panierObjet = {
        productTitle,
        productImage,
        productQuantity,
        productColors,
        productPrice,
    };
    console.log(panierObjet);

    //---------------------------------------------------
    //--------------  LOCALSTORAGE  ---------------------
    //---------------------------------------------------

    // Déclaration de la variable pour la RECUPERATION des données dans le localstorage :
    // avec conversion au format JSON :
    let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
    console.log(produitLocalStorage);

    //Si le produit est déjà dans le courage alors :
    if(produitLocalStorage) {
        produitLocalStorage.push(panierObjet);
        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
        console.log(produitLocalStorage);

    }
    //si le produit n'est pas dans el localstorage alors :
    else {
        produitLocalStorage = [];
        produitLocalStorage.push(panierObjet);
        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

        console.log(produitLocalStorage);
    }

});