const db = require('../connection');

/**
 * Возвращает таблицу платежей
 */
function getPayment() {
    return db.any('SELECT * FROM payment')
    .then(payments => {
        return payments;
    })
    .catch(error => {
        console.log(error);
    });
}



module.exports = {
    getPayment
}