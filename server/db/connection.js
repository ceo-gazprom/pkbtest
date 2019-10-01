var pgp = require('pg-promise')(/*options*/);

// dev var db = pgp("postgres://"+process.env.USER+":password@localhost:5432/pkb");
// prod
var db = pgp(process.env.DATABASE_URL)

var fs = require('fs');

var sql = fs.readFileSync('pkb.sql').toString();

db.query(sql, function(err, result){
    done();
    if(err){
        console.log('error: ', err);
        process.exit(1);
    }
    process.exit(0);
});

module.exports = db