const CinemaDal = require('../Data Access/CinemaAccess');
const Cinema = require('../Model/Cinema');

exports.Create = async function (name, address, provinceId) {
    let cinema = Cinema.build({Name: name, Address: address, ProvinceCityId: provinceId});

    try {
        CinemaDal.create(cinema);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }

}

exports.GetAll = async function () {
    try {
        let cinemas = await CinemaDal.getAll();
        return cinemas
    } catch (error) {
        console.log(error);
    }
}

exports.GetById = async function (id) {
    try {
        let cinema = await CinemaDal.getById(id);
    } catch (error) {
        console.log(error);
    }
}

exports.GetByProvinceId = async function (provinceId) {
    try {
        let cinemas = await CinemaDal.getByProvinceId(provinceId);
        return cinemas;
    } catch (error) {
        console.log(error);
    }
}

exports.Update = async function (id, name, address, provinceCityId) {
    try {
        let cinema = Cinema.build({
            id: id,
            Name: name,
            Address: address,
            ProvinceCityId: provinceCityId,
        });

        await CinemaDal.update(cinema);
    } catch (error) {
        console.log(error);
    }
}

exports.Delete = async function (id) {
    try {
        await CinemaDal.delete(id);
    } catch (error) {
        console.log(error);
    }
}