const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HoOFvGw31QU3puGWqmRwRgZbvr6tCrxGrUWTvKbjmJnL8on4dQfV99S4P8CTamfONALRa8MNbQENQxDcWDMsvvN00iOhTbtpq");


// My API 

// App config 
const app = express();

// MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());
// API ROUTES
app.get('/', (request, response) => response.status(200).send('you made it in'))

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log('Payment Request Recieved for this amout', total);

	const paymentIntent = await stripe.paymentIntents.create({
			amount: total, //subunits of currenct
			currency: "usd",
	});

// oce it is created

	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});

});	



// LISTEN COMMMAND


exports.api = functions.https.onRequest(app)

// our example endpoint 

//http://localhost:5001/mern-ecommerce-f7e99/us-central1/api