var pgp = require('pg-promise')(/*options*/);
var db = pgp("postgres://"+process.env.USER+":password@localhost:5432/pkb");


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