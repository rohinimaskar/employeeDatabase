const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.use('/*', (req, res, next) => {
if (req.baseUrl && req.baseUrl.indexOf('/api') > -1) {
                next();
            }else{
            	 if (req.baseUrl && (req.baseUrl.match(/\.*\.(js|html|css|mp3|jpg|jpeg|png|gif|svg|ttf|woff|woff2|ico|php|xml|txt|po|zip)\.*/g))) {
                    if (!fs.existsSync(__dirname + '/public' + req.baseUrl)) {
                        return res.redirect('/404');
                    } else {
                        return res.sendFile(path.resolve(__dirname, 'public' + req.baseUrl));
                    }
                }else{
            	 	return res.sendFile(path.resolve(__dirname, 'public/index.html'));
				}
              }
            
});

require('./app/routes/employee.routes.js')(app);

// listen for requests
app.listen(process.env.PORT ||3000, () => {
    console.log("Server is listening on port 3000");
});
