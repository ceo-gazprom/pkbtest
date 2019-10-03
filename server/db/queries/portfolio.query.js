const db = require('../connection');

/**
 * Возвращает таблицу портфелей
 */
function getPortfolio() {
    return db.any("SELECT * FROM portfolio")
    .then(portfolio => {
        return portfolio;
    })
    .catch(error => {
        console.log(error);
    });
}

/**
 * Возвращает список портфелей в работе
 */
function getPortfolioInProgress() {
    return db.any("SELECT * FROM 'portfolio'")
    .then(portfolio => {
        return portfolio;
    })
    .catch(error => {
        console.log(error);
    });
}

module.exports = {
    getPortfolio,
    getPortfolioInProgress
}