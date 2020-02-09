// Hämtar varukorg från databasen
const getCart = () => {
    let cartContainer = document.getElementById('cartContainer');
    let productHeader = document.getElementById('productHeader');
    let priceHeader = document.getElementById('priceHeader');
    let imgHeader = document.getElementById('imgHeader');
    let quantityHeader = document.getElementById('quantityHeader');
    let buttonHeader = document.getElementById('buttonHeader');
    let totalPrice = document.getElementById('totalPrice');

    fetch('http://localhost:8000/api/cart', {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        data.forEach((products) => {
            let mainArticle = document.createElement("article");
            let cartName = document.createElement("h3");
            let cartImg = document.createElement("img");
            let cartPrice = document.createElement('p');
            let removeButton = document.createElement('button');
            let cartQuantity = document.createElement('p');

            mainArticle.className = 'cartCard';
            cartName.className = 'cartCardName';
            cartImg.className = 'cartCardImg';
            cartPrice.className = 'cartCardPrice';
            removeButton.className = 'removeCardButton';
            cartQuantity.className = 'cartCardQuantity';

            cartImg.src = products.img;
            cartPrice.innerText = products.price + ' kr';
            cartName.innerText = products.name;
            removeButton.innerHTML = 'Ta bort';
            cartQuantity.innerHTML = 1;
            totalPrice.innerText = cartPrice * cartQuantity;

            cartContainer.appendChild(mainArticle);
            productHeader.appendChild(cartName);
            imgHeader.appendChild(cartImg);
            priceHeader.appendChild(cartPrice);
            buttonHeader.appendChild(removeButton);
            quantityHeader.appendChild(cartQuantity);

            removeButton.addEventListener("click", function() {
                removeProductsFromCart(this.value);
            });
        })
    });
}
getCart();

// Tar bort produkter från varukorgen
const removeProductsFromCart = (id) => {
    const products = {id: id}
    fetch('http://localhost:8000/api/cart', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(products)
    })
    .then((response) => {
        response.json();
        console.log(products);
    })
}