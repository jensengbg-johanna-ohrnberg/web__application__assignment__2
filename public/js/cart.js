const createCartCard = (data) => {
    let cartContainer = document.getElementById('cartContainer');
    let productHeader = document.getElementById('productHeader');
    let priceHeader = document.getElementById('priceHeader');
    let imgHeader = document.getElementById('imgHeader');

    for (let i = 0; i < data.length; i++) {
        // extract values from data
        let id = data[i].id;
        let name = data[i].name;
        let price = data[i].price;
        let img = data[i].image;

        // create HTML block for cart card
        let mainArticle = document.createElement("article");
        let cartName = document.createElement("h3");
        let cartImg = document.createElement("img");
        let cartPrice = document.createElement('p');
        let removeButton = document.createElement('button');

        // set classes, atrributes and innerHTML to all tags
        mainArticle.className = 'cartCard';
        cartName.className = 'cartCardName';
        cartImg.className = 'cartCardImg';
        cartPrice.className = 'cartCardPrice';
        removeButton.className = 'removeCardButton';

        cartImg.setAttribute('src', img);
        removeButton.setAttribute('value', id);

        cartName.innerHTML = name;
        cartPrice.innerHTML = price + ' kr';
        removeButton.innerHTML = 'Ta bort';

        // add all the elements to the page
        cartContainer.appendChild(mainArticle);
        productHeader.appendChild(cartName);
        imgHeader.appendChild(cartImg);
        priceHeader.appendChild(cartPrice);
        article.appendChild(removeButton);

        // add eventlistener to the add to cart button
        removeButton.addEventListener("click", function() {
            removeProductsFromCart(this.value);
        });
    }
}

// Hämtar varukorg
const getCart = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        createCartCard(); 
    });
}
getCart();

// Tar bort från varukorg
const removeProductsFromCart = () => {
    fetch('http://localhost:8000/api/cart/:id', {
        method: 'DELETE'
    })
    .then((response) => response.json())
    .then((deleteProducts) => {
        console.log('Borttagen:', deleteProducts);
    })
};