const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path')
require('dotenv').config()

const users = require("./routes/api/users");
const plaid = require("./routes/api/plaid");
const budget = require ("./routes/api/budget")

const app = express();
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = process.env.MONGODB_URI || require('./config/keys').MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB 🔌 connected 🤘"))
  .catch((err) => console.log(err));

  // Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/plaid", plaid);
app.use("/api/budget", budget);

// utilizing morgan to log our http request
if(process.env.NODE_ENV === "development") {
  app.use(morgan('dev'))
}

// helps serve static assest if in production (deployed to heroku)
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.listen(port, () =>
  console.log(`🚀 Server is 🤙listening at 🧭 http://localhost:${port} `)
);
