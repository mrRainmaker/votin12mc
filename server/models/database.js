var pg = require('pg');
var connectionString = "postgres://*kjakjjfpjggjja*:*3Al9QFqYeuzeSUK1cCWE3osXsi@ec2-54-228-226-93.eu-west-1.compute.amazonaws.com*:*5432*:/*d9ger7jvq3mgd9*"

pg.connect(connectionString, function(err, client, done) {
   client.query('SELECT * FROM your_table', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
   });
});;

var client = new pg.Client("postgres://*kjakjjfpjggjja*:*3Al9QFqYeuzeSUK1cCWE3osXsi@ec2-54-228-226-93.eu-west-1.compute.amazonaws.com*:*5432*:/*d9ger7jvq3mgd9*");
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });
