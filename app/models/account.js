var pg = require('pg');
var util = require('util');
var ConectionString = 'postgres://postgres:@localhost:5432/QuanlyDD';
var account = {
    CheckUser: function( user , callback ){
        var client = new pg.Client(ConectionString);
        client.connect(function( err ){
            if (err != null) throw err;
            var queryString = 
            util.format("Select id, f_username from users where f_username = '%s' and f_password = '%s'",user.username ,
        user.password);
            //console.log(queryString);
            client.query(queryString, function( err, resultQuery){
                if (err)
                    throw err;
                //console.log(JSON.stringify(resultQuery));
                if (resultQuery.rowCount != 0){
                    callback(resultQuery.rows);
                }     
                else
                    callback(null);
            }); 
        });
    }
};
module.exports = account;