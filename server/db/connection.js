var pgp = require('pg-promise')(/*options*/);

// Конфиги для подключения к БД
// Prod
if (process.env.prod) {
    var db = pgp(process.env.DATABASE_URL);
}
// Dev
else {
    var db = pgp("postgres://"+process.env.USER+":password@localhost:5432/pkb");
}

// Проверяем наличие таблиц
if (process.env.DB_DEPLOY != true) {
    var table = db.query("SELECT to_regclass('person');");
}

table.then(result =>{
    if (result[0].to_regclass == null) {
        console.log("Import DB...")

        // Загружаем дамб БД
        var fs = require('fs');
        var sql = fs.readFileSync('pkb.sql').toString();
        
        // Создаем таблицы в БД
        db.query(sql);
        process.env.DB_DEPLOY = true;
    }
    else {
        process.env.DB_DEPLOY = true;
    }
});

module.exports = db