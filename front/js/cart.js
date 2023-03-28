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


function panierProduct(product, productStorage) {
    //----------Création de l'intégralité du block----------------------
    const sectionItem = document.getElementById("cart__items");
    let itemArticle = document.createElement("article");
    sectionItem.appendChild(itemArticle);
    itemArticle.classList.add("cart__item");

    const sectionCartItem = document.getElementsByClassName("cart__item")[0];
    let itemCartImg = document.createElement("div");
    sectionCartItem.appendChild(itemCartImg);
    itemCartImg.classList.add("cart__item__img");

    const sectionImg = document.getElementsByClassName("cart__item__img")[0];
    let itemImg = document.createElement("img");
    sectionImg.appendChild(itemImg);
    itemImg.src = product.imageUrl;

    // ----- création du bloc, div , cart__item__content ---------- //
    let itemCartContent = document.createElement("div");
    sectionCartItem.appendChild(itemCartContent);
    itemCartContent.classList.add("cart__item__content");

    // ------ cration du bloc, div, cart__item__content__description --------//
    const sectionCartContent = document.getElementsByClassName("cart__item__content")[0];
    let itemCartContentDescription = document.createElement("div");
    sectionCartContent.appendChild(itemCartContentDescription);
    itemCartContentDescription.classList.add("cart__item__content__description");

    const sectionNomProduit = document.getElementsByClassName("cart__item__content__description")[0];
    let itemNomProduit = document.createElement("h2");
    sectionNomProduit.appendChild(itemNomProduit);
    itemNomProduit.innerText = product.name;

    const sectionCouleurProduit = document.getElementsByClassName("cart__item__content__description")[0];
    let itemCouleurProduit = document.createElement("p");
    sectionCouleurProduit.appendChild(itemCouleurProduit);
    itemCouleurProduit.innerText = productStorage.productColors ;

    const sectionPrixProduit = document.getElementsByClassName("cart__item__content__description")[0];
    let itemPrixProduit = document.createElement("p");
    sectionPrixProduit.appendChild(itemPrixProduit);
    itemPrixProduit.innerText = product.price;

    // ----- création du bloc, div, cart__item__content__settings------------//
    const sectionCartContentSetting = document.getElementsByClassName("cart__item__content")[0];
    let itemCartContentSettings = document.createElement("div");
    sectionCartContentSetting.appendChild(itemCartContentSettings);
    itemCartContentSettings.classList.add("cart__item__content__settings");

    let itemCartContentSettingsQuantity = document.createElement("div");
    sectionCartContentSetting.appendChild(itemCartContentSettingsQuantity);
    itemCartContentSettingsQuantity.classList.add("cart__item__content__settings__quantity");

    const sectionQuantityProduit = document.getElementsByClassName("cart__item__content__settings__quantity")[0];
    let itemQuantityProduit = document.createElement("p");
    sectionQuantityProduit.appendChild(itemQuantityProduit);

    const sectionInputQuantity = document.getElementsByClassName("cart__item__content__settings__quantity")[0];
    let itemInputQuantity = document.createElement("input");
    sectionInputQuantity.appendChild(itemInputQuantity);
    itemInputQuantity.classList.add("itemQuantity");
    itemInputQuantity.value = productStorage.productQuantity;

    // ----- création du bloc, div, cart__item__content__settings__delete ---//
    const sectionCartItemContentSettingsDelete = document.getElementsByClassName(".cart__item__content__settings")[0];
    let itemCartContentSettingsDelete = document.createElement("div");
    sectionCartItemContentSettingsDelete.appendChild(itemCartContentSettingsDelete);
    itemCartContentSettingsDelete.classList.add("cart__item__content__settings__delete");

    const sectionBtnDeleteItem = document.getElementsByClassName("cart__item__content__settings__delete")[0];
    let deleteItem = document.createElement("p");
    sectionBtnDeleteItem.appendChild(deleteItem);
    deleteItem.classList.add(".deleteItem");
};
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



/*// -------------------------------------- //
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
