const sequelize = require('../DatabaseConfig.js');
const {Model, DataTypes} = require('sequelize');

class Cinema extends Model {}

Cinema.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ProvinceCityId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'cinema',
        timestamps: false,
    }
);

module.exports = Cinema;