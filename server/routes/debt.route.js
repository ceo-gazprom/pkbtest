const Router = require('koa-router');
const router = new Router();

const request = require('../db/queries/debt.query');
const BASE_URL = `/api/v1/debt`;

/**
 * Возвращает таблицу задолжностей
 */
router.get(BASE_URL, async (ctx) => {
  try {
    const result = await request.getDebt();
    ctx.status = 200;
    ctx.body = {
      data: result,
    };
  } catch (err) {
    console.log(err)
  }
})

/**
* Возвращает таблицу задолжностей
*/
router.get(BASE_URL + "/nopayment", async (ctx) => {
 try {
   const result = await request.getDebtNopayment();
   console.log(result);
   ctx.status = 200;
   ctx.body = {
     data: result,
   };
 } catch (err) {
   console.log(err)
 }
})


module.exports = router;