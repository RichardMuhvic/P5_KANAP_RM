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


// Création de addEventListener pour envoyer le produit au click du bouton "ajout au panier" :
document.querySelector("#addToCart").addEventListener("click", (event) => {
    event.preventDefault();
    // Création des variables :
    let productQuantity = document.querySelector('#quantity').value;
    let productColors = document.querySelector("#colors").value;

    // Création de l'objet à rajouter au panier :
    let product = {
        productID,
        productQuantity,
        productColors,
    };
    //-----------------------------------------------------------------
    //------------------------  LOCALSTORAGE  -------------------------
    //-----------------------------------------------------------------

    // Déclaration de la variable pour la RECUPERATION des données dans le localstorage :

    // Avec conversion au format JSON :
    let productLocalStorage = JSON.parse(localStorage.getItem("product"));
    //Si le produit est déjà dans le localstorage alors :
    if(productLocalStorage) {
        if(productLocalStorage.productID === product.productID) {
            let productFound = productLocalStorage.find(e => e.productID === product.productID && e.productColors === product.productColors)
            console.log(productFound)
            if(productLocalStorage) {
                productFound.productQuantity = parseInt(productFound.productQuantity) + parseInt(product.productQuantity) + 0;
                console.log(productFound);
            }
            localStorage.setItem("product", JSON.stringify(productLocalStorage))
            console.log(productLocalStorage)
        }
        
    }
    // Si le produit n'est pas dans le  localstorage alors :
    else {
        productLocalStorage = [];
        productLocalStorage.push(product);
        localStorage.setItem("product", JSON.stringify(productLocalStorage));
        
        console.log(productLocalStorage)
    }
});