var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

const session = require("express-session")
const flash = require("connect-flash")

const passport = require("passport")
require("./auth")(passport)

var app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(session({
  secret: "123",
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use(express.json());
app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

consign()
  .include("app/routes")
  .then("config/dbConnection.js")
  .then("app/models")
  .then("app/controllers")
  .into(app);

module.exports = app;
