const express = require('express');
const lowdb = require('lowdb');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
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
    const databaseInitiated = database.has('products').value();

    if (!databaseInitiated) {
        database.defaults({ products: [{ id: 1, name: 'cleats', price: 2899, image: 'https://images.unsplash.com/photo-1511426463457-0571e247d816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { id: 2, name: 'skateboard', price: 699, image: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { id: 3, name: 'ball', price: 199, image: 'https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { id: 4, name: 'socks', price: 159, image: 'https://images.unsplash.com/photo-1563232490-bf837d8792fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { id: 5, name: 'inlines', price: 699, image: 'https://images.unsplash.com/photo-1501782223170-a04fc18cba9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { id: 6, name: 'goaliegloves', price: 299, image: 'https://images.unsplash.com/photo-1516115928206-880b8c879d22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { id: 7, name: 'helmet',price: 499, image: 'https://images.unsplash.com/photo-1545058803-7138682b521a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { id: 8, name: 'bicycle', price: 3999, image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { id: 9, name: 'spandex', price: 299, image: 'https://images.unsplash.com/photo-1545921142-325d5ae5f790?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        { id: 10, name: 'hockeystick', price: 2999, image: 'https://images.unsplash.com/photo-1558087333-5953f5994102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }], cart: [] }).write();
    }
}

// Hämtar alla produkterna i databasen
app.get('/', (request, response) => {

    const products = database.get('products')
    response.send(products);

});

/*
// Söker efter en produkt HAR EJ MED I INLÄMNINGEN
app.get('/api/products/:id', (request, response) => {
    let allProducts = database.get('products'); 

    const oneProduct = allProducts.find(c => c.id === parseInt(request.params.id));
    if (!oneProduct) {

        response.status(404).send('Den produkten finns tyvärr inte.');
    
    } else {

        response.send(oneProduct);

    };
});
*/

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