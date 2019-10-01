/**
 * Работа с портфелями
 * ------------------------
 * В этом файле описаны запросы к БД, касающиеся работы с портфелями
 */
const db = require('../connection');

/**
 * Возвращает список портфелей
 * @return array
 */
function getPortfolio() {
    return db.any('SELECT * FROM portfolio')
    .then(portfolio => {
        return portfolio;
    })
    .catch(error => {
        console.log(error);
    });
}

function a(){}

module.exports = {
    getPortfolio,
    a
}