// Hämtar varukorg från databasen
const getCart = () => {
    let cartContainer = document.getElementById('cartContainer');

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

            mainArticle.className = 'cartCard';
            cartName.className = 'cartCardName';
            cartImg.className = 'cartCardImg';
            cartPrice.className = 'cartCardPrice';
            removeButton.className = 'removeCardButton';

            removeButton.setAttribute('id', products.id);

            cartImg.src = products.image;
            cartPrice.innerText = products.price + ' kr';
            cartName.innerText = products.name;
            removeButton.innerHTML = 'Ta bort';

            cartContainer.appendChild(mainArticle);
            cartContainer.appendChild(cartName);
            cartContainer.appendChild(cartImg);
            cartContainer.appendChild(cartPrice);
            cartContainer.appendChild(removeButton);

            removeButton.addEventListener("click", function(event) {
                const id = event.target.attributes['id'].value;
                removeProductsFromCart(id);
                location.reload();
            });
        });
    });
};
getCart();

// Tar bort produkter från varukorgen
const removeProductsFromCart = (id) => {
    const products = {id: id}
    let URL = 'http://localhost:8000/api/cart/' + id;
    fetch(URL, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(products)
    })
    .then((response) => {
        response.json();
        console.log('Borttagen', products);
    })
}