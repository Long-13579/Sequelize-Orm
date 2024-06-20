const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('interndatabase', 'root', '13579', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;