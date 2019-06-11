//import nodemodule
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var session = require("express-session");
const cookieparser = require("cookie-parser");
const passport = require("passport");

//import from custom files
var wholeObj = require("./someFile");
var userRoute = require("./routes/user");
var todosRoutes = require("./routes/todos");
var dbConnection = require("./config/dbConnection");
var setupPassport = require("./config/passportConfig");

//app create
var app = express();

//add middleware
app.use(cors());
app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "@#^&$!#_)(@!#)**(@^%*&^*#${}|{@#$@#$(#@",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/test", (req, res) => {
  res.json("server is working");
});

//db connection
dbConnection();

//setup passport
setupPassport();

///user routes
app.use("/user", userRoute);
// app.use('/todo/api/v1.0', todosRoutes);

app.use(express.static("./public"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log("express server running on port 5000");
});
