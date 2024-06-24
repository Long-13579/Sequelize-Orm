const models = require('../models/index.js');
const Category = models.category;

exports.getAll = async function () {
    return await Category.findAll();
}

exports.getOne = async function () {
    return await Category.findOne();
}