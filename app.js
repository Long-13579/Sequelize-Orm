const express = require('express'),
    swaggerJsdoc = require('swagger-jsdoc'),
    swaggerUi = require('swagger-ui-express'),
    bodyParser = require('body-parser');

const cinemaRoute = require('./src/routes/Cinema.js')

const app = express();
const PORT = 3000;

const swaggerDocument = require('./api/swagger.json');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {explorer: true})
);

app.use('/cinema', cinemaRoute);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

