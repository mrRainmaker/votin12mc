var pg = require('pg');
var connectionString = "postgres://kjakjjfpjggjja:3Al9QFqYeuzeSUK1cCWE3osXsi@localhost/dev"

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });
