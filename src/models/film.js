'use strict'
module.exports = (sequelize , DataTypes) => {
    const film = sequelize.define('film',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            FilmName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Duration: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            Description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            DateStart: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            DateEnd: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            Director: {
                type: DataTypes.STRING,
                allowNull: false, 
            },
            Actor: {
                type: DataTypes.STRING,
                allowNull: false, 
            },
            Subtitle: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            Language: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            RateId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            Poster: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Trailer: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            timestamps: false,
        }
    );

    /*cinema.associate = (db) => {
        cinema.belongsTo(db.provincecity, {foreignKey: 'ProvinceCityId'});
        cinema.hasMany(db.screen, {foreignKey: 'CinemaId'});
    };*/

    return film;
}