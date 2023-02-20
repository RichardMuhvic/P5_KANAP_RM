let panierPage = document.location.href;

let panier = window.localStorage.getItem("product");

console.log(panier);

if (panier === null) {
    // Récupération des produits dans le panier
    fetch(`http://localhost:3000/api/products/${productID}`)
        .then((res) => res.json())
        .then((product) => {
            productId(product);
            //console.log(product);
    })
    .catch(function(err) { 
        console.log("Impossible de récupérer les données du produit", err);
    }); 
}
else {
    panier = JSON.parse(panier);
}

function