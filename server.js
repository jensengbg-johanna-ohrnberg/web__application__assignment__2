const bodyParser = require('body-parser');
const express = require('express');
const lowdb = require('lowdb');
const app = express();
const cors = require('cors');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const database = lowdb(adapter);
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

// Skapar en databas
const initiateDatabase = () => {
    const databaseInitiated = database.has('insults').value();

    if (!databaseInitiated) {
        database.defaults({ products: [{ id: 1, name: 'cleats', price: 2899, image: 'https://placeimg.com/640/480/nature' },
        { id: 2, name: 'skateboard', price: 699, image: 'https://placeimg.com/640/480/nature?t=1580049418291' },
        { id: 3, name: 'ball', price: 199, image: 'https://placeimg.com/640/480/nature?t=1580049710373' },
        { id: 4, name: 'shinguards', price: 159, image: 'https://placeimg.com/640/480/nature?t=1580049775596' },
        { id: 5, name: 'inlines', price: 699, image: 'https://placeimg.com/640/480/nature?t=1580049828979' },
        { id: 6, name: 'goaliegloves', price: 299, image: 'https://placeimg.com/640/480/nature?t=1580049916144' },
        { id: 7, name: 'helmet',price: 499, image: 'https://placeimg.com/640/480/nature?t=1580050055633' },
        { id: 8, name: 'bicycle', price: 3999, image: 'https://placeimg.com/640/480/nature?t=1580050100144' },
        { id: 9, name: 'spandex', price: 299, image: 'https://placeimg.com/640/480/nature?t=1580050151790' },
        { id: 10, name: 'hockeystick', price: 2999, image: 'https://placeimg.com/640/480/nature?t=1580050341224' }], cart: [] }).write();
    }
}

// Hämtar alla produkterna i databasen
app.get('/', (request, response) => {

    const products = database.get('products')
    response.send(products);
});

// Lägger till produkter i varukorgen
app.post('/api/cart', (request, response) => {

    let id = request.body.id;
    let product = parseInt(id);
    
    let findProducts = database.get('products')
                                .find({ 'id':  product })
                                .value();

    if (!findProducts) {

        response.status(404).send("The product you've chosen does not exist!");
    
    } else {

        let searchProducts = database.get('cart')
                                    .find({ 'id': product })
                                    .value();

        if (searchProducts) {

            response.status(404).send("The product you've chosen is already added to your cart!");

        } else {

            const addProduct = database.get('cart')
                                        .push(findProducts) 
                                        .write();

            response.send(addProduct);

        };   
    };
});

// Tar bort en produkt i varukorgen
app.delete('/api/cart/:id', (request, response) => {

    let id = request.params.id;
    let product = parseInt(id);
    
    let findProducts = database.get('cart')
                                .find({ 'id':  product})
                                .value();

    if (!findProducts) {
        
        response.status(404).send("The product you've chosen does not exist!");
    
    } else {

        let removeProduct = database.get('cart')
                                    .remove(findProducts)
                                    .write();

        response.send(removeProduct);
    
    };
});

// Visar varukorgen
app.get('/api/cart', (request, response) => {
    const cart = database.get('cart').write();
    response.send(cart);
});

app.listen(port, () => {
    console.log('Server started on port: ', port);
    initiateDatabase();
});