const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const upload = require('./routes/upload');
const Grid = require('gridfs-stream');

require("dotenv").config();
//static authenticate method of model in local strategy

// Define middleware here
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.use("/*", (req, res) => {
// 	console.log("hello")
// })

// Twilio
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);


// app.get('/text', (req, res) => {
// 		client.messages
// 		.create({
// 		   body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
// 		   from: '+12174874133',
// 		   to: '+19496333057'
// 		 })
// 		.then(message => console.log(message.sid));
// })

// MESSAGEBIRD


// var messagebird = require('messagebird')('Byp2PBke8lCGisAA26NLdWAUW');

//     var params = {
//       'originator': 'MessageBird',
//       'recipients': [
//         '19496333057'
//     ],
//       'body': 'This is a test message'
//     };

// 	app.get('/text', (req, res) => {
//     messagebird.messages.create(params, function (err, response) {
//       if (err) {
//         return console.log(err);
//       }
//       console.log(response);
//     })
// 	})




// Serve up static assets (usually on heroku)
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function(req, res) {
// 	res.sendFile(path.join(__dirname, '/build/index.html'), function(err) {
// 	  if (err) {
// 		res.status(500).send(err)
// 	  }
// 	})
//   })

// Connect to the Mongo DB
mongoose
	.connect(
		// process.env.MONGODB_URI || 
		"mongodb://localhost/pantheon", {
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log("MongoDB Connected!"))
	.catch((error) => console.log("MongoDB did not connect: ", error));

// Add routes, both API and view
let gfs;

const conn = mongoose.connection;
conn.once("open", function() {
	gfs = Grid(conn.db, mongoose.mongo);
	gfs.collection("photos");
});



app.get('/file/:filename', async (req, res) => {
	// console.log("hello")
	try {
		console.log("here")
		const file = await gfs.files.findOne({filename: req.params.filename});
		const readStream = gfs.createReadStream(file.filename);
		readStream.pipe(res)
	} catch (error) {
		res.send('not found')
	}
});

app.delete("/file/:filename", async (req, res) => {
	try {
		await gfs.files.deleteOne({filename:req.params.filname});
		res.send("success");
	} catch (error) {
		console.log(error);
		res.send("An erroor occurred")
	}
})

app.use(routes);
app.use("/file", upload);


// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


