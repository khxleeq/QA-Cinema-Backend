const express = require('express')
const MongoDBConnect = require('./config/db')
const port = process.env.PORT || 5000
const dotenv = require('dotenv');
require("dotenv").config({ path: "./config/.env" });
const cors = require('cors');
const bodyParser = require('body-parser');


// Database connect
MongoDBConnect()

// App initialise
const app = express()


// // Routes
const bookingRoutes = require('./routes/bookingRoutes');
const movieRoutes = require('./routes/moviesRoutes');
const discussionRoutes = require('./routes/discussionRoutes');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/booking', bookingRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/discussion', discussionRoutes);



app.listen(port, () => console.log(`Server port: ${port}`))