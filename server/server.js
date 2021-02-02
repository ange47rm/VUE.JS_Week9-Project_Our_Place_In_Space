const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');

const app = express();

app.use(cors());
app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('astronomy');
        // const bookingsCollection = db.collection('bookings'); //TODO
        // const bookingsRouter = createRouter(bookingsCollection); //TODO
        // app.use('/api/bookings', bookingsRouter); //TODO
    })
    .catch(console.err);

app.listen(3000, function() {
    console.log(`Listening on port ${ this.address().port }`);
});