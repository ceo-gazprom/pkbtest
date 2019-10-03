const db = require('../connection');

/**
 * Возвращает таблицу задолжностей
 */
function getDebt() {
    return db.any("SELECT * FROM debt")
    .then(persons => {
        return persons;
    })
    .catch(error => {
        console.log(error);
    });
}

/**
 * Возвращает список должников с сумой задолжности больше 150 рублей
 */
function getPersonDebtOver() {
    return db.any('SELECT d.id_person, p.fio, d.deb FROM (SELECT id_person, SUM(debt_sum) as deb from debt Group By (id_person)) d left join person p on d.id_person = p.id_person WHERE d.deb > 150')
    .then(persons => {
        return persons;
    })
    .catch(error => {
        console.log(error);
    });
}

/**
 * Вывбрать все долги без платежей
 */
function getDebtWithoutPayment(amount) {
    return db.any('select d.id_debt, COALESCE(p.payment_sum, 0) FROm debt d left join payment p on d.id_debt = p.id_debt WHERE p.payment_sum is null')
    .then(result => {
        return result;
    })
    .catch(error => {
        console.log(error);
    });
}

module.exports = {
    getDebt,
    getPersonDebtOver,
    getDebtWithoutPayment
}