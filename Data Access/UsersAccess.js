const {Op} = require('sequelize');
const User = require('../Model/Users.js');

exports.create = async function (user) {
    console.log('Create new user.');
    await User.create({FirstName: user.FirstName, LastName: user.LastName});
}

exports.getAll = async function () {
    console.log('Get all user');
    return await User.findAll();
}

exports.getById = async function (id) {
    console.log('Get user by id');
    const user = await User.findAll({
        where: {
            Id: id,
        },
    });

    if (!user) {
        throw new Error('not found');
    }

    return user;
}

exports.update = async function () {
    
}