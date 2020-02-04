const arrow = document.getElementById('img__a');
const cart = document.getElementById('img__c');
const addCleatsBtn = document.getElementById('cleats__btn');
const addBallBtn = document.getElementById('ball__btn');
const addGoalieglovesBtn = document.getElementById('goaliegloves__btn');
const addSpandexBtn = document.getElementById('Spandex__btn');
const addSocksBtn = document.getElementById('socks__btn');
const addHockeystickBtn = document.getElementById('hockeystick__btn');
const addSkateboardBtn = document.getElementById('skateboard__btn');
const addInlinesBtn = document.getElementById('inlines__btn');
const addHelmetBtn = document.getElementById('helmet__btn');
const addBicycleBtn = document.getElementById('bicycle__btn');
const displayProducts = document.getElementById('product__output');
const baseURL = 'http://localhost:8000/api/cart';

// Lägger till produkter
    const data = { name: name };
    fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(text => console.log(text));

/*
// Hämtar produkter
const getProducts = () => {
    fetch('http://localhost:8000', {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}

getProducts();
*/