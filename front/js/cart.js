// Récupération des objets stockés dans le localstorage :
let productLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productLocalStorage);


for (let i=0; i<productLocalStorage.length; i++) {
    console.log(productLocalStorage)
    
    fetch(`http://localhost:3000/api/products/${productLocalStorage[i].productID}`)
        .then((res) => res.json())
        .then((value) => {
            panierProduct(value, productLocalStorage[i])
            console.log("ça marche");
        })
        .catch(function(err) { 
            console.log("Impossible de récupérer les données du produit", err);
        }); 

    function panierProduct(product, productStorage) {
        let articleProductPanier = document.querySelector("#cart__items");

        articleProductPanier.innerHTML += 
            `<article class="cart__item" data-id="${product.productID}" data-color="${product.productColors}">
                <div class="cart__item__img">
                    <img src="${product.imageUrl}" alt="${product.altTxt}">
                </div>
                <div class="cart__item__content">
                    <div class="cart__item__content__description">
                        <h2>"${product.name}"</h2>
                        <p>"${productStorage.productColors}"</p>
                        <p>"${product.price}"€</p>
                    </div>
                    <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                            <p>Qté : </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productStorage.productQuantity}">
                        </div>
                        <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                        </div>
                    </div>
                </div>
            </article>`;
    }
};

// Modification de la quantité d'un produit
/*let quantityChanged = document.querySelector(".itemQuantity");
quantityChanged.addEventListener("change", (event) => {
    event.preventDefault();
    //changement de la quantité ici :
    productStorage.productQuantity = event.target.value;
    console.log(productQuantity);
});

// Suppression d'un produit
const productDelete = document.querySelector(".deleteItem");
productDelete.addEventListener("click", function() {
    localStorage.removeItem("productID");
});*/
//afficher le prix total des produits:

// -------------------------------------- //
// ------------ FORMULAIRE -------------- //
// -------------------------------------- //
let form = document.querySelector(".cart__order__form");
//prenom
form.firstName.addEventListener("change", function() {
    validationFirstName(this);
})
const validationFirstName = function(inputFirstName) {
    let firstNameRegEx = new RegExp("^[A-Za-z\é\è\ê\-]+$","g");
    let messageFirstName = document.querySelector("#firstNameErrorMsg")
    // Ecoute du test de l'expression régulière :
    if(firstNameRegEx.test(inputFirstName.value)) {
        messageFirstName.innerHTML = "prénom valide";
    }
    else{
        messageFirstName.innerHTML = "prénom invalide";
    }
};

//nom
form.lastName.addEventListener("change", function() {
    validationLastName(this);
})
const validationLastName = function(inputLastName) {
    let lastNameRegEx = new RegExp("^[A-Za-z\é\è\ê\-]+$","g");
    let messageLastName = document.querySelector("#lastNameErrorMsg")
    // Ecoute du test de l'expression régulière :
    if(lastNameRegEx.test(inputLastName.value)) {
        messageLastName.innerHTML = "nom valide";
    }
    else{
        messageLastName.innerHTML = "nom invalide";
    }
};

//adresse
form.address.addEventListener("change", function() {
    validationAddress(this);
})
const validationAddress = function(inputAddress) {
    let addressRegEx = new RegExp("^[1-9]{1-3}[a-z]{2-4}[/\w/\n]{5,70}$", "g");
    let messageAddress = document.querySelector("#addressErrorMsg")
    // Ecoute du test de l'expression régulière :
    if(addressRegEx.test(inputAddress.value)) {
        messageAddress.innerHTML = "addresse valide";
    }
    else{
        messageAddress.innerHTML = "addresse invalide";
    }
};

//ville
form.city.addEventListener("change", function() {
    validationCity(this);
})
const validationCity = function(inputCity) {
    let cityRegEx = new RegExp("^[a-zA-Z-]+[a-zA-Z]","g");
    let messageCity = document.querySelector("#cityErrorMsg")
    // Ecoute du test de l'expression régulière :
    if(cityRegEx.test(inputCity.value)) {
        messageCity.innerHTML = "ville valide";
    }
    else{
        messageCity.innerHTML = "ville invalide";
    }
};

//email
form.email.addEventListener("change", function() {
    validationEmail(this);
})
const validationEmail = function(inputEmail) {
    let emailRegEx = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
    let message = document.querySelector("#emailErrorMsg")
    // Ecoute du test de l'expression régulière :
    if(emailRegEx.test(inputEmail.value)) {
        message.innerHTML = "email valide";
    }
    else{
        message.innerHTML = "email invalide";
    }
};