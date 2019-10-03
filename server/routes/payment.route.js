const Router = require('koa-router');
const router = new Router();

const request = require('../db/queries/payment.query');

const BASE_URL = `/api/v1/payment`;

/**
 * Возвращает список платежей
 */
router.get(BASE_URL, async (ctx) => {
  try {

    const portfolio = await request.getPayment();

    ctx.status = 200;
    ctx.body = {
      data: portfolio,
    };
  } catch (err) {
    console.log(err)
  }
})


module.exports = router;