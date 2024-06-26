const models = require('./src/models/index.js')
const Cinema = models.cinema;
const ProvinceCity = models.provincecity;

(async () => {
    let temp = await Cinema.findAll({
        include: {
            model: ProvinceCity,
            where: {id: 1},
            attributes: []
        }
    });
    console.log(JSON.stringify(temp, null, 2));
})();
