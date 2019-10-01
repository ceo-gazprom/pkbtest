/**
 * Роут для работы со списком должников
 */
const Router = require('koa-router');
const router = new Router();

// Подключение запросы к таблице должников
const request = require('../db/queries/person.query');


const BASE_URL = `/api/v1/person`;

/**
 * Возвращает список должников
 * 
 * @return array
 */
router.get(BASE_URL, async (ctx) => {
  try {
    const persons = await request.getPerson();
    ctx.status = 200;
    ctx.body = {
      data: persons,
    };
  } catch (err) {
    console.log(err)
  }
})

/**
 * Возвращает список должников, с задолжностью свыше 150 рублей
 */
router.get(BASE_URL+'/over', async (ctx) => {
  try {
    const persons = await request.getPersonDebtOver();
    ctx.status = 200;
    ctx.body = {
      data: persons,
    };
  } catch (err) {
    console.log(err)
  }
})

/**
 * Возвращает список портфелей в работе
 */
router.get(BASE_URL+'/portfile', async (ctx) => {
  try {
    const persons = await request.getPersonDebtOver();
    ctx.status = 200;
    ctx.body = {
      data: persons,
    };
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;