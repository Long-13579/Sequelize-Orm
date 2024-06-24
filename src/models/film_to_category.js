'use strict'

module.exports = (sequelize, DataTypes) => {
    const film_to_category = sequelize.define('film_to_category',
        {
            Filmid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            CategoryId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
        },
        {
            sequelize,
            freezeTableName: true,
            timestamps: false,
        }
    );

    film_to_category.associate = (db) => {
        film_to_category.belongsTo(db.film, {foreignKey: 'Filmid'});
        film_to_category.belongsTo(db.category, {foreignKey: 'CategoryId'});
    }

    return film_to_category;
}