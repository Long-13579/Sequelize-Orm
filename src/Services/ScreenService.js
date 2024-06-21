const ScreenDal = require('../Data Access/ScreenAccess.js');

exports.GetAll = async function () {
    try {
        let screens = await ScreenDal.getAll();
        
        if (!screens) {
            throw new Error()
        }

        return screens;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.GetById = async function (id) {
    try {
        let screen = ScreenDal.getById(id);

        if (!screen) {
            throw new Error('Not Found');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.GetByCinemaId = async function (cinemaId) {
    try {
        let screens = await ScreenDal.getByCinemaId(cinemaId);

        if (!screens) {
            throw new Error('Not Found');
        }

        return screens;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.Create = async function (seatMatrix, cinemaId) {
    try {
        await ScreenDal.create(seatMatrix, cinemaId);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.Update = async function (id, seatMatrix, cinemaId) {
    try {
        await ScreenDal.update(id, seatMatrix, cinemaId)
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.Delete = async function (id) {
    try {
        await ScreenDal.delete(id);
    } catch (error) {
        console.log(error);
        throw error;
    }
}