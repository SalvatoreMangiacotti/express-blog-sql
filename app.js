/* Express */

const express = require('express');
const app = express();
const port = 3000;


/* Cors */

const cors = require('cors');


/* Routes */

const routes = require('./routes/routes')


// Middlewares 

app.use(express.static('public'));

app.use(express.json());


// CORS module

app.use(cors({ origin: 'http://localhost:5173/' }))


app.get('/', (req, res) => {

    res.send('Server del mio blog');

})


app.use("/post", routes);


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

})