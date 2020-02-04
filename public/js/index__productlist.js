const arrow = document.getElementById('img__a');
const cart = document.getElementById('img__c');

const cleatsObj = document.querySelector('.cleats');
const addCleatsBtn = document.getElementById('cleats__btn');

const ballObj = document.querySelector('.ball');
const addBallBtn = document.getElementById('ball__btn');

const goalieglovesObj = document.querySelector('.goaliegloves');
const addGoalieglovesBtn = document.getElementById('goaliegloves__btn');

const spandexObj = document.querySelector('.spandex');
const addSpandexBtn = document.getElementById('Spandex__btn');

const socksObj = document.querySelector('.socks');
const addSocksBtn = document.getElementById('socks__btn');

const hockeystickObj = document.querySelector('.hockeystick');
const addHockeystickBtn = document.getElementById('hockeystick__btn');

const skateboardObj = document.querySelector('.skateboard');
const addSkateboardBtn = document.getElementById('skateboard__btn');

const inlinesObj = document.querySelector('.inlines');
const addInlinesBtn = document.getElementById('inlines__btn');

const helmetObj = document.querySelector('.helmet');
const addHelmetBtn = document.getElementById('helmet__btn');

const bicycleObj = document.querySelector('.bicycle');
const addBicycleBtn = document.getElementById('bicycle__btn');

const displayProducts = document.getElementById('product__output');

const baseURL = 'http://localhost:8000/api/cart'

const insert = () => {
    const 
}

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

// Lägger till produkter
const data = { database: products };
const addProducts = () => {
    fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}

addProducts();
*/