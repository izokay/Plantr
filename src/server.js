var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
var axios = require('axios');
var Cloudant = require('@cloudant/cloudant');
var cloudant = Cloudant("https://b2bce79a-5509-4341-9870-b88a98ccb55d-bluemix:0794147962259ea4dc345f489855714749717ececf7f5ee19aa6d21052abf565@b2bce79a-5509-4341-9870-b88a98ccb55d-bluemix.cloudantnosqldb.appdomain.cloud");
var db = cloudant.db.use('plant_db')

var app = express();

app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(cors());

// Routes
app.post('/api/get_plants', function(req, res) {
	var plants = []
	db.list({include_docs: true}).then((body) => {
  		body.rows.forEach((doc) => {
    			// output each document's body
			plants.push(doc.doc)
    			console.log(doc.doc);
  		});
		res.send(plants);
	});
});

app.post('/api/send_data', function(req,res) {
    let id = req.body.data;
    db.get(id).then((body) => {
  	axios.post('http://localhost:5000', body)
	.then((res) => {
		console.log(`statusCode: ${res.statusCode}`)
		console.log(res)
	})
	.catch((error) => {
		console.error(error)
	})
    });
});

app.post('/api/insert_plants', function(req, res) {
	let data = req.body;
	console.log(data)
	console.log(data['name']);

	db.insert({
    		"plant_name": data.name,
    		"plant_scientific_name": data.scientific_name,
    		"plant_description": data.description,
    		"required_water_milliliters": data.required_water,
    		"required_humidity_grams": data.required_humidity,
    		"required_temperature_celcius": data.required_temp
	}).then((body) => {
		console.log(body)
	}) 
});

app.listen(process.env.PORT || 8101);
app.timeout = 1000;
