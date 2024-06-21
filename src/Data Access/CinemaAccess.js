const models = require('../models/index.js')
const Cinema = models.cinema;
const ProvinceCity = models.provincecity;
const {Op} = require('sequelize');

exports.create = async function (cinema) {
    await Cinema.create({id: cinema.id, Name: cinema.Name, Address: cinema.Address, ProvinceCityId: cinema.ProvinceCityId});
}

exports.getAll = async function () {
    return await Cinema.findAll({include: ProvinceCity});
}

exports.getById = async function (id) {
    let cinema = await Cinema.findAll({
        where: {id: id},
        include: ProvinceCity,
    });

    if (!cinema) {
        throw new Error('Not found');
    }

    return cinema;
}

exports.getByProvinceId = async function (provinceId) {
    let cinemas = await Cinema.findAll({
        where: {ProvinceCityId: provinceId},
        include: ProvinceCity
    });

    if (!cinemas) {
        throw new Error('Not Found');
    }

    return cinemas;
}

exports.update = async function (cinema) {
    await Cinema.update(
        {
            Name: cinema.Name,
            Address: cinema.Address,
            ProvinceCityId: cinema.ProvinceCityId
        },
        {
            where: {id: cinema.id}
        }
    );
}

exports.delete = async function (id) {
    await Cinema.destroy({
        where: {id: id}
    });
}