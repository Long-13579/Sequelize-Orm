const Service = require('./Services/CinemaService.js');


async function test() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

//test().then(() => {sequelize.close()});

/*const User = sequelize.define(
    'User',
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
);*/



/*
(async () => {
    const user = await User.create({FirstName: 'Cuong', LastName: 'Nguyen'});
    console.log(user.toJSON());
    user.update({
        FirstName: 'Dat',
        LastName: 'Chanh',
    });
})();
*/


(async () => {
    await Service.Delete(4);
    let cinema = await Service.GetAll();
    console.log('All cinema:', JSON.stringify(cinema, null, 2));
})();