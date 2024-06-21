'use strict'

module.exports = (sequelize, DataTypes) => {
    const screen = sequelize.define('screen',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            SeatMatrix: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            sequelize,
            timestamps: false,
        }
    );

    screen.associate = (db) => {
        screen.belongsTo(db.cinema, {foreignKey: 'CinemaId'});
    };

    return screen;
}