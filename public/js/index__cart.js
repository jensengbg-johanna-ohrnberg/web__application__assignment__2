const cart = document.getElementById('img__c');

// Hämtar varukorg
const getCart = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}

getCart();