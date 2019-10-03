const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');
const logger = require('koa-morgan');
const path = require('path');

// Маршруты роутера
const mainRoutes = require('./routes/main.route.js');
const personRoutes = require('./routes/person.route.js');
const portfolioRoutes = require('./routes/portfolio.route.js');
const paymentRoutes = require('./routes/payment.route.js');
const debtRoutes = require('./routes/debt.route.js');

const app = new Koa();

// Должен быть подключен до подключения роутинга
app.use(logger('tiny'));

app.use(mount('/dist', serve(path.join(__dirname, '../dist'))));

// Подключаем роуты к серверу
app.use(personRoutes.routes());
app.use(portfolioRoutes.routes());
app.use(paymentRoutes.routes());
app.use(debtRoutes.routes());

// Должен быть последним, перехватывает все запросы не описанные в роутах выше
app.use(mainRoutes.routes());

// Слушаем порт окружения или указанный нами
app.listen(process.env.PORT || 3000);

module.exports = app;