const db = require('../connection');

/**
 * Возвращает таблицу портфелей
 */
function getPortfolio() {
    return db.any("SELECT * FROM portfolio")
    .then(result => {
        return result;
    })
    .catch(error => {
        console.log(error);
    });
}

/**
 * Возвращает список портфелей в работе
 */
function getPortfolioInProgress() {
    return db.any("select cal_date, SUM(sum) from (select * from calendar AS c left join (SELECT id_portfolio, sign_date, end_date FROM portfolio) p on (p.sign_date between c.cal_date and c.cal_date + interval '1 month' - interval '1 day' OR c.cal_date between p.sign_date and p.end_date)) tmp join (SElect id_portfolio, SUM(debt_sum) FROM debt group by id_portfolio) dlg on tmp.id_portfolio = dlg.id_portfolio group by cal_date ORDER BY cal_date")
    .then(result => {
        return result;
    })
    .catch(error => {
        console.log(error);
    });
}

/**
 * Возвращает все портфели и их эффективность
 */
function getPortfolioEfficiency() {
    return db.any("SELECT port.portfolio_name, COALESCE(cash.efficiency, 0) FROM portfolio port LEFT join (select d.id_portfolio, round(sum(pay.sum) / SUM(d.debt_sum) * 100, 1) as efficiency from debt as d join (SELECT id_debt, SUM(payment_sum) as sum from payment group by id_debt) as pay ON d.id_debt = pay.id_debt group by (d.id_portfolio)) cash on port.id_portfolio = cash.id_portfolio order by port.portfolio_name")
    .then(result => {
        return result;
    })
    .catch(error => {
        console.log(error);
    });
}

/**
 * Возвращает эффективность в каждый месяц
 */
function getPortfolioEfficiencyDate() {
    return db.any("select  aa.cal_date, round(aa.sum_pay / bb.sum_debt * 100, 2) from (select cal.cal_date, COALESCE(sum(pay.payment_sum), 0) as sum_pay from calendar cal left join payment pay on pay.date between cal.cal_date and cal.cal_date + interval '1 month' - interval '1 day' group by (cal.cal_date)) aa join (select cal_date, SUM(sum) as sum_debt from (select * from calendar AS c left join (SELECT id_portfolio, sign_date, end_date FROM portfolio) p on (p.sign_date between c.cal_date and c.cal_date + interval '1 month' - interval '1 day' OR c.cal_date between p.sign_date and p.end_date)) tmp join (SElect id_portfolio, SUM(debt_sum) FROM debt group by id_portfolio) dlg on tmp.id_portfolio = dlg.id_portfolio group by cal_date) bb on aa.cal_date = bb.cal_date;")
    .then(result => {
        return result;
    })
    .catch(error => {
        console.log(error);
    });
}

module.exports = {
    getPortfolio,
    getPortfolioInProgress,
    getPortfolioEfficiency,
    getPortfolioEfficiencyDate
}