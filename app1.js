const Screen = require('./src/Services/ScreenService');

(async () => {
    let screen = await Screen.GetByCinemaId(10);
    console.log(JSON.stringify(screen, null, 2));
})();