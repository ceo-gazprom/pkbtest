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

/**
 * Возвращает список портфелей в работе
 */
router.get(BASE_URL+"/progress", async (ctx) => {
  try {

    const result = await request.getPortfolioInProgress();

    ctx.status = 200;
    ctx.body = {
      data: result,
    };
  } catch (err) {
    console.log(err)
  }
})

/**
 * Возвращает список портфелей и их эффективность
 */
router.get(BASE_URL+"/efficiency", async (ctx) => {
  try {

    const result = await request.getPortfolioEfficiency();

    ctx.status = 200;
    ctx.body = {
      data: result,
    };
  } catch (err) {
    console.log(err)
  }
})

// Возвращает эффект ивность по датам
router.get(BASE_URL+"/efficiency/date", async (ctx) => {
  try {

    const result = await request.getPortfolioEfficiencyDate();

    ctx.status = 200;
    ctx.body = {
      data: result,
    };
  } catch (err) {
    console.log(err)
  }
})


module.exports = router;