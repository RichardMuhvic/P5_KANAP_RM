
//Utilisation de 'fetch' pour requêter l'API :
fetch("http://localhost:3000/api/products")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        console.log(value);
        display(value);
    })
    .catch(function(err) {
        console.log(err);
    });


function display(products) {
    for( let i = 0; i < products.length; i++ ) {
        // Récupération de la section qui va accueillir le produit :
        const sectionItems = document.querySelector(".items");
        // création de la carte <a> du produit :
        const anchorProduct = document.createElement('a');
        anchorProduct.href = `./product.html?id=${products[i]._id}`;
        // création d'une balise pour créer une fiche de produit :
        const sectionArticle = document.createElement('article');

        // création des différentes balise, image, nom du produit, description du produit :
        let productImage = document.createElement('img');
        productImage.src = products[i].imageUrl;
        let productName = document.createElement('h3');
        productName.innerText = products[i].name;
        let productDescription = document.createElement('p');
        productDescription.innerText = products[i].description;

        // Rattachement de la balise article à la carte <a> :
        sectionItems.appendChild(anchorProduct);
        // Rattachement de la balise article à la fiche de produit :
        anchorProduct.appendChild(sectionArticle);
        // rattachement des différentes balises à l'article :
        sectionArticle.appendChild(productImage);
        sectionArticle.appendChild(productName);
        sectionArticle.appendChild(productDescription);
    };
};

