const Router = require('koa-router');
const router = new Router();

const request = require('../db/queries/portfolio.query');

const BASE_URL = `/api/v1/portfolio`;

/**
 * Возвращает список портфелей
 */
router.get(BASE_URL, async (ctx) => {
  try {

    const portfolio = await request.getPortfolio();

    ctx.status = 200;
    ctx.body = {
      data: portfolio,
    };
  } catch (err) {
    console.log(err)
  }
})


module.exports = router;