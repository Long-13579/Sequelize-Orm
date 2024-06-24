'use strict'

module.exports = (sequelize, DataTypes) => {
    const catergory = sequelize.define('category',
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
        },
        {
            sequelize,
            timestamps: false,
        }
    );

    catergory.associate = (db) => {
        catergory.belongsToMany(db.film, {
            through: db.film_to_category,
            foreignKey: 'CategoryId',
        });
    };

    return catergory;
}