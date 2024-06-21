'use strict'

module.exports = (sequelize, DataTypes) => {
    const provincecity = sequelize.define('provincecity',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            Name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
        }
    );

    provincecity.associate = (db) => {
        provincecity.hasMany(db.cinema);
    };

    return provincecity;
}