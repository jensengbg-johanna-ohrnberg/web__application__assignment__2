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
        database.defaults({ products: [
        { id: 1, name: 'Fotbollsskor', price: 2899, image: 'https://www.billigastefotbollsskor.com/1212-thickbox_default/nike-fotbollsskor-mercurial-superfly-vi-360-elite-df-fg-cr7-r%C3%B6d-guld.jpg' },
        { id: 2, name: 'Benskydd', price: 199, image: 'https://www.stadium.se/INTERSHOP/static/WFS/Stadium-SwedenB2C-Site/-/Stadium/sv_SE/Small1x1/265101_106_NIKE_MERCURIAL%20LITE%20GRD.png' },
        { id: 3, name: 'Strumpor', price: 149, image: 'https://cdn-media.sportamore.se/uploads/products/4056562183954_001_84c4a781d49c481388375b4819f15f7f_jpg_439x356_crop-smart_upscale_q85.jpg' },
        { id: 4, name: 'Målvaktshandskar', price: 299, image: 'https://cdn.intersport.se/productimages/690x600/144344301000_10.jpg' },
        { id: 5, name: 'Benskyddstejp', price: 99, image: 'https://www.allinsports.se/pub_images/large/Benskyddstejp-Allinsports_se_863.jpg' },
        { id: 6, name: 'Skridskor', price: 7999, image: 'https://www.xxl.se/filespin/5b0107f0a2174bab9681bd3ff90ae1e3?resize=544,544&quality=90' },
        { id: 7, name: 'Hjälm', price: 999, image: 'https://www.xxl.se/filespin/bc817c904be74616b9cc99c36f5934c7?resize=317,317&quality=90&bgcolor=efefef' },
        { id: 8, name: 'Hockeyklubba', price: 2999, image: 'https://www.hockeytown.se/pub_images/original/1052250.jpg' },
        { id: 9, name: 'Axelskydd', price: 1499, image: 'https://cdn.mysitoo.com/10033/cache/atn1024_Bauer-supreme-170-axelskydd.jpg?v=1429793030' },
        { id: 10, name: 'Armbågsskydd', price: 899, image: 'https://www.hockeytown.se/pub_images/large/1053021.jpg' }], cart: [] }).write();
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