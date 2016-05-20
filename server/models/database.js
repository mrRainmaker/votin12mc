var pg = require('pg');
//var connectionString = require(path.join(__dirname, '../', '../', 'config'));

pg.defaults.ssl = true;
pg.connect(process.env.postgres:kjakjjfpjggjja:3Al9QFqYeuzeSUK1cCWE3osXsi@ec2-54-228-226-93.eu-west-1.compute.amazonaws.com:5432/d9ger7jvq3mgd9
, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });
