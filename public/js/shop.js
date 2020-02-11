const createProductCard = (data) => {
    let productContainer = document.getElementById('productContainer');

    for (let i = 0; i < data.length; i++) {
        // Hämta data
        let id = data[i].id;
        let name = data[i].name;
        let price = data[i].price;
        let img = data[i].image;

        // Skapar element
        let productArticle = document.createElement("article");
        let productName = document.createElement("h3");
        let productImg = document.createElement("img");
        let productPrice = document.createElement('p');
        let addButton = document.createElement('button');

        // Namnger elementen
        productArticle.className = 'productCard';
        productName.className = 'productCardName';
        productImg.className = 'productCardImg';
        productPrice.className = 'productCardPrice';
        addButton.className = 'productCardButton';

        productImg.setAttribute('src', img);
        addButton.setAttribute('value', id);

        productName.innerHTML = name;
        productPrice.innerHTML = price + ' kr';
        addButton.innerHTML = 'Lägg till';

        // Lägger till elementen till HTTL sidan
        productContainer.appendChild(productArticle);
        productArticle.appendChild(productName);
        productArticle.appendChild(productImg);
        productArticle.appendChild(productPrice);
        productArticle.appendChild(addButton);

        // Lägger till eventlistener på knappen
        addButton.addEventListener("click", function() {
            addProductsToCart(this.value);
        });
    };
};

// Hämtar produkterna från databasen
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

// Lägger till produkter i varukorgen
const addProductsToCart = (id) => {
    const products = { id: id }
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(products),
    })
    .then((response) => response.json())
    .then((products) => {
        console.log('Tillagd:', products);
    })
    .catch((error) => {
        console.log('Redan tillagd', error);
        alert('Den här produkten är redan tillagd!');
    });
};