const CinemaService = require('../Services/CinemaService.js')
var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    let provinceId = req.query.provinceId;

    if (provinceId) {
        let cinemas = await CinemaService.GetByProvinceId(provinceId);
        res.status(200),
        res.send(cinemas);
        return;
    }

    let cinemas = await CinemaService.GetAll();
    res.status(200);
    res.send(cinemas);
    return;
});

router.get('/:cinemaId', async (req, res) => {
    let cinema = await CinemaService.GetById(req.params.cinemaId);
    res.status(200);
    res.send(cinema)
})

router.post('/', async (req, res) => {
    console.log(req.body);
    res.status(200);
    res.send();
});

router.put('/', async (req, res) => {
    console.log(req.body);
    res.status(200);
    res.send();
})

router.delete('/:cinemaId', async (req, res) => {
    console.log(req.params.cinemaId);
    res.status(200);
    res.send();
})

module.exports = router;