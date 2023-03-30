// Récupération des objets stockés dans le localstorage :
let productLocalStorage = JSON.parse(localStorage.getItem("product"));


for (let i=0; i<productLocalStorage.length; i++) {    
    fetch(`http://localhost:3000/api/products/${productLocalStorage[i].productID}`)
        .then((res) => res.json())
        .then((value) => {
            panierProduct(value, productLocalStorage[i])
            console.log("ça marche");
        })
        .catch(function(err) { 
            console.log("Impossible de récupérer les données du produit", err);
        }); 
};

//----------------------------------------------------------------------
//-------Création de la fonction qui va créer le DOM dynamique----------
//----------------------------------------------------------------------
function panierProduct(product, productStorage) {
    //----------Création de l'intégralité du block----------------------
    const sectionItem = document.getElementById("cart__items");
    let itemArticle = document.createElement("article");
    sectionItem.appendChild(itemArticle);
    itemArticle.classList.add("cart__item");

    let itemCartImg = document.createElement("div");
    itemArticle.appendChild(itemCartImg);
    itemCartImg.classList.add("cart__item__img");

    let itemImg = document.createElement("img");
    itemCartImg.appendChild(itemImg);
    itemImg.src = product.imageUrl;
    console.log(product)

    // ----- création du bloc, div , cart__item__content ---------- //
    let itemCartContent = document.createElement("div");
    itemArticle.appendChild(itemCartContent);
    itemCartContent.classList.add("cart__item__content");

    // ------ création du bloc, div, cart__item__content__description --------//
    let itemCartContentDescription = document.createElement("div");
    itemCartContent.appendChild(itemCartContentDescription);
    itemCartContentDescription.classList.add("cart__item__content__description");

    let itemNomProduit = document.createElement("h2");
    itemCartContentDescription.appendChild(itemNomProduit);
    itemNomProduit.innerText = product.name;

    let itemCouleurProduit = document.createElement("p");
    itemCartContentDescription.appendChild(itemCouleurProduit);
    itemCouleurProduit.innerText = productStorage.productColors ;

    let itemPrixProduit = document.createElement("p");
    itemCartContentDescription.appendChild(itemPrixProduit);
    itemPrixProduit.innerText = product.price;

    // ----- création du bloc, div, cart__item__content__settings------------//
    let itemCartContentSettings = document.createElement("div");
    itemCartContent.appendChild(itemCartContentSettings);
    itemCartContentSettings.classList.add("cart__item__content__settings");

    let itemCartContentSettingsQuantity = document.createElement("div");
    itemCartContentSettings.appendChild(itemCartContentSettingsQuantity);
    itemCartContentSettingsQuantity.classList.add("cart__item__content__settings__quantity");

    let itemQuantityProduit = document.createElement("p");
    itemCartContentSettingsQuantity.appendChild(itemQuantityProduit);

    let itemInputQuantity = document.createElement("input");
    itemCartContentSettingsQuantity.appendChild(itemInputQuantity);
    itemInputQuantity.classList.add("itemQuantity");
    itemInputQuantity.value = productStorage.productQuantity;

    // ----- création du bloc, div, cart__item__content__settings__delete ---//
    const sectionCartItemContentSettingsDelete = document.getElementsByClassName(".cart__item__content__settings")[0];
    let itemCartContentSettingsDelete = document.createElement("div");
    itemCartContentSettings.appendChild(itemCartContentSettingsDelete);
    itemCartContentSettingsDelete.classList.add("cart__item__content__settings__delete");

    let deleteItem = document.createElement("p");
    itemCartContentSettingsDelete.appendChild(deleteItem);
    deleteItem.classList.add(".deleteItem");
};

//------------------------------------------------------
//-------Changement quantité et suppression produit-----
//------------------------------------------------------
/*quantityChanged.addEventListener("click", function() {
    //changement de la quantité ici :
    input.value = parseInt(input.value)+1
    input.value = parseInt(input.value)-1
});*/

// Suppression d'un produit
/*document.querySelector(".deleteItem").addEventListener("click", function() {
    localStorage.removeItem("productID");
});*/

//afficher le prix total des produits:



/*-----------------------------------------------------
--------------------- FORMULAIRE ----------------------
-------------------------------------------------------
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
    let addressRegEx = new RegExp("^[1-9]{1-3}[a-z]{2-6}[/\w/\n]{5,70}$", "g");
    let messageAddress = document.querySelector("#addressErrorMsg")
    // Ecoute du test de l'expression régulière :
    if(addressRegEx.test(inputAddress.value)) {
        messageAddress.innerHTML = "adresse valide";
    }
    else{
        messageAddress.innerHTML = "adresse invalide";
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

let firstName = validationFirstName;
let lastName = validationLastName;
let address = validationAddress;
let city = validationCity;
let email = validationEmail;

let formContact = {
    firstName,
    lastName,
    address,
    city,
    email
};
console.log(formContact)

let response = fetch("http://localhost:3000/api/products/order", {
    method: 'POST',
    body: JSON.stringify(formContact)
})
*/
