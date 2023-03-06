// Récupération des objets stockés dans le localstorage :
let productLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productLocalStorage);


fetch(`http://localhost:3000/api/products/`)
    .then((res) => {
        res.json()
        console.log("ça marche 1");
    })
    .then((value) => {
        productPanier(value)
        console.log("ça marche 2");
    })
    .catch(function(err) { 
        console.log("Impossible de récupérer les données du produit", err);
    });


function productPanier(product) {
    for (i =0; i < productLocalStorage.length; i++) {
        console.log(productLocalStorage.length);
    
        //-------------------------------------------------------------------
        //----------Création de l'intégralité du block----------------------
        //-------------------------------------------------------------------
        const sectionItem = document.querySelector("#cart__items");
        let itemArticle = document.createElement("article");
        sectionItem.appendChild(itemArticle);
        itemArticle.classList.add("cart__item");
    
        const sectionCartItem = document.querySelector(".cart__item");
        let itemCartImg = document.createElement("div");
        sectionCartItem.appendChild(itemCartImg);
        itemCartImg.classList.add("cart__item__img");
    
        const sectionImg = document.querySelector(".cart__item__img");
        let itemImg = document.createElement("img");
        sectionImg.appendChild(itemImg);
        // A CETTE LIGNE Récupération de l'image depuis l'API du produit choisi dans le panier //
        itemImg.src = productLocalStorage.imageUrl;
        //------------
    
        //--------------------------------------------------------------//
        // ----- création du bloc, div , cart__item__content ---------- //
        let itemCartContent = document.createElement("div");
        sectionCartItem.appendChild(itemCartContent);
        itemCartContent.classList.add("cart__item__content");
    
        //-----------------------------------------------------------------------//
        // ------ cration du bloc, div, cart__item__content__description --------//
        const sectionCartContent = document.querySelector(".cart__item__content");
        let itemCartContentDescription = document.createElement("div");
        sectionCartContent.appendChild(itemCartContentDescription);
        itemCartContentDescription.classList.add("cart__item__content__description");
    
        const sectionNomProduit = document.querySelector(".cart__item__content__description");
        let itemNomProduit = document.createElement("h2");
        sectionNomProduit.appendChild(itemNomProduit);
        // CETTE LIGNE, récupération du nom du produit au loczaltstorage
        itemNomProduit.innerText = productLocalStorage[i].productTitle;
    
        const sectionCouleurProduit = document.querySelector(".cart__item__content__description");
        let itemCouleurProduit = document.createElement("p");
        sectionCouleurProduit.appendChild(itemCouleurProduit);
        // CETTE LIGNE, récupération de la couleur choisi au localstorage
        itemCouleurProduit.innerText = productLocalStorage[i].productColors ;
    
        const sectionPrixProduit = document.querySelector(".cart__item__content__description");
        let itemPrixProduit = document.createElement("p");
        sectionPrixProduit.appendChild(itemPrixProduit);
        // CETTE lIGNE, récupération du prix du produit au localstorage
        itemPrixProduit.innerText = productLocalStorage[i].productPrice;
    
        //-----------------------------------------------------------------------//
        // ----- création du bloc, div, cart__item__content__settings------------//
        const sectionCartContentSetting = document.querySelector(".cart__item__content");
        let itemCartContentSettings = document.createElement("div");
        sectionCartContentSetting.appendChild(itemCartContentSettings);
        itemCartContentSettings.classList.add("cart__item__content__settings");
    
        const sectionCartItemContentSettingsQuantity = document.querySelector(".cart__item__content__settings")
        let itemCartContentSettingsQuantity = document.createElement("div");
        sectionCartItemContentSettingsQuantity.appendChild(itemCartContentSettingsQuantity);
        itemCartContentSettingsQuantity.classList.add("cart__item__content__settings__quantity");
    
        const sectionQuantityProduit = document.querySelector(".cart__item__content__settings__quantity");
        let itemQuantityProduit = document.createElement("p");
        sectionQuantityProduit.appendChild(itemQuantityProduit);
    
        const sectionInputQuantity = document.querySelector(".cart__item__content__settings__quantity");
        let itemInputQuantity = document.createElement("input");
        sectionInputQuantity.appendChild(itemInputQuantity);
        itemInputQuantity.classList.add("itemQuantity");
        // CETTE LIGNE, récupération de la quantité du produit au localtstorage
        itemInputQuantity.value = productLocalStorage[i].productQuantity;
    
        //---------------------------------------------------------------------------//
        // ----- création du bloc, div, cart__item__content__settings__delete ---//
        const sectionCartItemContentSettingsDelete = document.querySelector(".cart__item__content__settings");
        let itemCartContentSettingsDelete = document.createElement("div");
        sectionCartItemContentSettingsDelete.appendChild(itemCartContentSettingsDelete);
        itemCartContentSettingsDelete.classList.add("cart__item__content__settings__delete");
    
        const sectionBtnDeleteItem = document.querySelector(".cart__item__content__settings__delete");
        let deleteItem = document.createElement("p");
        sectionBtnDeleteItem.appendChild(deleteItem);
        deleteItem.classList.add(".deleteItem");
    
        console.log(sectionItem);
        console.log(sectionCartItem)
    };
};
