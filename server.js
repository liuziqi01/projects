var express = require("express")
, path = require('path')
, mongoose = require ('mongoose');

var app = express();



// Points Express to a folder where you keep static files
// e.g. css or client side js files
app.use(express.static(path.normalize(__dirname) + '/public'));

var uristring = process.env.MONGOLAB_URL;
// Tell express to use its built in error handler
app.use(express.errorHandler());

	app.use(express.logger('dev'));
	app.use(express.bodyParser()); // parsing post request
app.use(exprees.methodOverride());
app.use(express.router); // allow to work with your router

// These 3 lines tell express that we are going to be rendering html files
// held in the public directory which should be in the same directory as this file
app.set('views', path.normalize(__dirname) + '/public/html');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

require('./routes')(app);

mongoose.connect(uristring, function(err, res){
    if(err)
    {
	console.log("err" + err);
}
    else
    {
	var port = Number(process.env.PORT || 8000;
			  app.listen(port);
			  console.log("App listening on port: " + port);
    }
};

