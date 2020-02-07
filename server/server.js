// index.js

"use strict";
const { secretKeys  } = require('./data');
const express = require("express");
const app = express();
const PORT = 8080;



// ============================= SERVER SETUP ================================ //
app.set("view engine", "ejs");
const bcrypt = require('bcrypt'); // We may move this to userRoutes
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieSession({
  name: 'session',
  keys: secretKeys,
  maxAge: 24 * 60 * 60 * 1000
}));



// ============================= ENDPOINTS ================================ //


app.get("/test", (req, res) => {
  res.send("🤗");
});


// ============================ SERVER ACTIVITY =============================== //
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});