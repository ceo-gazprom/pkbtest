/**
 * Роут описывает работы с API портфелей
 */
const Router = require('koa-router');
const router = new Router();

// Подготовленные SQL запросы для работы с портфелями
const request = require('../../db/queries/portfolio.query');

// Базовый адрес API
// Версия API для обратной совместимости
const BASE_URL = `/api/v1/portfolio`;

/**
 * Возвращает список портфелей
 * @method GET
 * @return array
 */
router.get(BASE_URL, async (ctx) => {
  try {
    // Асинхронный запрос к БД
    const portfolio = await request.getPortfolio();

    // Возвращаемый резкультат клиенту
    ctx.status = 200;
    ctx.body = {
      data: portfolio,
    };
  } catch (err) {
    console.log(err)
  }
})

// Список портфелей в работе

module.exports = router;