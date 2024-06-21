'use strict'

module.exports = (sequelize, DataTypes) => {
    const cinema = sequelize.define('cinema',
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
        },
        {
            sequelize,
            timestamps: false,
        }
    );

    cinema.associate = (db) => {
        cinema.belongsTo(db.provincecity, {foreignKey: 'ProvinceCityId'});
    };

    return cinema;
}