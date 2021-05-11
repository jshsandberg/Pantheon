const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
//static authenticate method of model in local strategy

// Define middleware here
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



// Serve up static assets (usually on heroku)
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'), function(err) {
	  if (err) {
		res.status(500).send(err)
	  }
	})
  })

// Connect to the Mongo DB
mongoose
	.connect(
		process.env.MONGODB_URI || 
		"mongodb://localhost/pantheon", {
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log("MongoDB Connected!"))
	.catch((error) => console.log("MongoDB did not connect: ", error));

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


