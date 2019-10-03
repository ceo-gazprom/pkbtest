const Router = require('koa-router');
const router = new Router();

// Читаем фронт
const fs = require('fs');
const path = require('path');
const util = require('util');


const readFile = util.promisify(fs.readFile);

// Отдаем фронт
router.get('/*', async (ctx) => {
    ctx.status = 200;
    ctx.set('Content-Type', 'text/html');
    ctx.body = await readFile(path.join(__dirname, '../../dist/index.html'));  
})

module.exports = router;