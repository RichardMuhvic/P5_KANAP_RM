// Récupération des objets stockés dans le localstorage :
let productLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productLocalStorage);

fetch(`http://localhost:3000/api/products`)
    .then((res) => res.json())
    .then((product) => {
        productLocalStorage(product);
        //console.log(product);
    })
    .catch(function(err) { 
        console.log("Impossible de récupérer les données du produit", err);
    });


const sectionItem = document.querySelector("#cart__items");

//voir si le panier est vide ou non :
/*if (productLocalStorage) {
    console.log("le panier contient un produit");
    let blockPanier = [];

    blockPanier = blockPanier = `
        <article class="cart__item" data-id="${productLocalStorage.productID}" data-color="${productLocalStorage.productColors}">
            <div class="cart__item__img">
                <img src="../images/product01.jpg" alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>{itemName}</h2>
                    <p>${productLocalStorage.productColors}</p>
                    <p>${productLocalStorage.productPrice} €</p>
                </div>
                <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                        <p>Qté : ${productLocalStorage.productQuantity}</p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                    </div>
                </div>
            </div>
        </article>
    `
 
    console.log(productLocalStorage.productColors);

}
else {
    console.log("le panier est vide")
}*/