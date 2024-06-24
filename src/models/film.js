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

    film.associate = (db) => {
        film.belongsToMany(db.category, {
            through: db.film_to_category,
            foreignKey: 'Filmid',
        });
    };

    return film;
}