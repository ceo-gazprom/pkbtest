const db = require('../connection');

/**
 * Возвращает список должников
 * @return array
 */
function getPerson() {
    return db.any('SELECT * FROM person')
    .then(persons => {
        return persons;
    })
    .catch(error => {
        console.log(error);
    });
}

/**
 * Возвращает список должников с сумой задолжности больше 150 рублей
 * @returns array
 */
function getPersonDebtOver(amount) {
    return db.any('SELECT p.fio, d.debt_sum FROM person p LEFT JOIN debt d ON p.id_person = d.id_person where debt_sum > 150')
    .then(persons => {
        return persons;
    })
    .catch(error => {
        console.log(error);
    });
}


module.exports = {
    getPerson,
    getPersonDebtOver
}