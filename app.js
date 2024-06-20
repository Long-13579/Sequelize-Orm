const CinemaService = require('./Services/CinemaService.js');


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
    let temp = await CinemaService.Create('CGV', '123 Nguyen Tri Phuong', 1);

    if (!temp) {
        console.log('error');
    }

    let cinema = await CinemaService.GetAll();
    console.log('All cinema:', JSON.stringify(cinema, null, 2));
    
    cinema = await CinemaService.GetById(4);
    console.log('Cinema with id 4:', JSON.stringify(cinema, null, 2));

    //cinema = await CinemaService.GetByProvinceId(1);
    //console.log('Cinema with province city id 1:', JSON.stringify(cinema, null, 2));
    
    await CinemaService.Update(4, 'CGVV', '321 Nguyen Tri Phuong', 2);
    cinema = await CinemaService.GetById(4);
    console.log('Cinema after update:', JSON.stringify(cinema, null, 2));
    
    //await CinemaService.Delete(2);
    //cinema = await CinemaService.GetAll();
    //console.log('Cinema after Delete:', JSON.stringify(cinema, null, 2));
})();