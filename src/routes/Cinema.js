const CinemaService = require('../Services/CinemaService.js')
var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    let cinemas = await CinemaService.GetAll();
    res.status(200);
    res.send(cinemas);
});

module.exports = router;