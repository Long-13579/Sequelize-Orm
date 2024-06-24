const temp = require('./src/Data Access/FilmAccess.js');

(async () => {
    let instants = await temp.getAll();
    let cate = await instants[0].getCategories();
    console.log(JSON.stringify(cate, null, 2));
})();