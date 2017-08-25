var pg = require('pg');
var util = require('util');
var ConectionString = 'postgres://postgres:@localhost:5432/QuanlyDD';
var product = {
    getProduct: function( id , callback){
        var client = new pg.Client(ConectionString);
        client.connect(function( err ){
            if (err != null) throw err;
            var queryString = util.format("Select proid, proname, tinydes from products where catid = %s",id);
            //console.log(queryString);
            client.query(queryString, function( err, result){
                if (err)
                    throw err;
                //console.log(JSON.stringify(result));
                callback(err, result.rows);
            }); 
        });
    }
};
module.exports = product;