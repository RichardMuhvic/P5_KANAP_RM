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
    console.log(selectColor);

    sectionImage.appendChild(productImage);
    sectionTitle.appendChild(productTitle);
    sectionPrice.appendChild(productPrice);
    sectionDescription.appendChild(productDescription);
};



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
        productID,
        productImage,
        productPrice,
        productTitle,
        productQuantity,
        productColors,
    };
    console.log(panierObjet);

    let panier = [];
    console.log(panier);
    // Vérification si le panier est vide :
    if(panier.length === 0) {
        console.log("le tableau est vide");
    }

    // Envoyer le produit dans le localstorage :
    let productLocalStorage = JSON.parse(localStorage.getItem("panierObjet"));
    console.log(productLocalStorage);
    localStorage.setItem("articles", JSON.stringify(productLocalStorage));

});


function productChecked(productLocalStorage, panier) {
    let objectProduct = productLocalStorage.find(e => e.productiID === panier.productID &&  e.productColors === panier.productColors);
    if (objectProduct) {
        const n = parseInt(objectProduct.productQuantity);
        const m = parseInt(panier.productQuantity);
        objectProduct.productQuantity = (n + m).toString();
    }
    else {
        productLocalStorage.push(panier);
    }
    console.log(productLocalStorage);

    return productLocalStorage;
}

/*
FUNCTION {
    le Produit n'est pas déjà dans le panier, alors ajouter le Produit dans Panier(Array)
    FOR (Produit === couleur && Produit === ID) {
        IF {
            le Produit est déjà dans le panier (même ID meme COULEUR)
            incrémenter la quantité
        }
        ELSE {
            Meme produit mais pas la meme couleur
            Ajouter la nouveau Produit de la couleur différente
        }
    }
*/
