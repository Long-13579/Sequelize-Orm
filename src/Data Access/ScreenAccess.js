const models = require('../models/index.js');
const Screen = models.screen;

exports.getAll = async function () {
    return await Screen.findAll();
}

exports.getById = async function (id) {
    return await Screen.findAll({where: {id: id}});
}

exports.getByCinemaId = async function (cinemaId) {
    return await Screen.findAll({where: {CinemaId: cinemaId}});
}

exports.create = async function (seatMatrix, cinemaId) {
    return await Screen.create({SeatMatrix: seatMatrix, CinemaId: cinemaId});
}

exports.update = async function (id, seatMatrix, cinemaId) {
    await Screen.update(
        {
            SeatMatrix: seatMatrix,
            CinemaId: cinemaId
        },
        {
            where: {id: id}
        }
    );
}

exports.delete = async function (id) {
    await Screen.destroy({where: {id: id}});
}