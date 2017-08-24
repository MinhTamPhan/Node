var pg = require('pg');
var ConectionString = 'postgres://postgres:@localhost:5432/QuanlyDD';
var category = {
    GetCategories: function( callback ){
        var client = new pg.Client(ConectionString);
        client.connect(function(err){
            if (err != null) throw err;
            client.query('Select id, name from categories', function( err, result){
                if (err)
                    throw err;
                // else
                //     console.log(JSON.stringify(result));
                callback(err, result.rows);
            });
        });
    }
}
module.exports = category;