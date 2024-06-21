const express = require('express');

const cinemaRoute = require('./routes/Cinema.js')

const app = express();
const PORT = 3000;

app.use('/cinema', cinemaRoute);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

