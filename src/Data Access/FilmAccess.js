const models = require('../models/index.js');
const Film = models.film;

exports.getAll = async function () {
    return await Film.findAll();
}