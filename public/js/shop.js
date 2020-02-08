const createProductCard = (data) => {
    let productContainer = document.getElementById('productContainer');

    for (let i = 0; i < data.length; i++) {
        // extract values from data
        let id = data[i].id;
        let name = data[i].name;
        let price = data[i].price;
        let img = data[i].image;

        // create HTML block for product card
        let article = document.createElement("article");
        let productName = document.createElement("h3");
        let productImg = document.createElement("img");
        let inforContainer = document.createElement('div');
        let productPrice = document.createElement('p');
        let button = document.createElement('button');

        // set classes, atrributes and innerHTML to all tags
        article.className = 'productCard';
        productName.className = 'productCardName';
        productImg.className = 'productCardImg';
        inforContainer.className = 'productCardInfo';
        productPrice.className = 'productCardPrice';
        button.className = 'productCardButton';

        productImg.setAttribute('src', img);
        button.setAttribute('value', id);

        productName.innerHTML = name;
        productPrice.innerHTML = price + ' kr';
        button.innerHTML = 'Lägg till';

        // add all the elements to the page
        productContainer.appendChild(article);

        article.appendChild(inforContainer);
        inforContainer.appendChild(productName);
        inforContainer.appendChild(productImg);
        inforContainer.appendChild(productPrice);
        inforContainer.appendChild(button);

        // add eventlistener to the add to cart button
        button.addEventListener("click", function() {
            addProductToCart(this.value);
        });
    }
}

// hämtar produkterna
const getProducts = () => {
    fetch('http://localhost:8000')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        createProductCard(data);
    });
};
getProducts();