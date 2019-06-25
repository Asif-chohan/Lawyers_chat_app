//import nodemodule
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var session = require("express-session");
const cookieparser = require("cookie-parser");
const passport = require("passport");
var userSchema = require("./models/usersSchema");
//import from custom files
var wholeObj = require("./someFile");
var userRoute = require("./routes/user");
var todosRoutes = require("./routes/todos");
var dbConnection = require("./config/dbConnection");
var setupPassport = require("./config/passportConfig");
var AccessToken = require("twilio").jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
//app create
var app = express();

const PORT = process.env.PORT || 5000;

var server = app.listen(PORT, function() {
  console.log("express server running on port 5000");
});
var io = require("socket.io").listen(server);

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

// socketIO Routes
let onLineUsers = [];
io.on("connection", function(socket) {
  socket.on("setId", id => {
    console.log("setId", id);
    socket.id = id
    socket.join(id);
    onLineUsers.push(id)
    io.emit("onlineUsers",onLineUsers )
  
    console.log("socetArr", onLineUsers);

  });
  
  socket.on("getTokan", id => {
    var identity = id;

    // Create an access token which we will sign and return to the client,
    // containing the grant we just created
    var token = new AccessToken(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_API_KEY,
      process.env.TWILIO_API_SECRET
    );

    // Assign the generated identity to the token
    token.identity = identity;

    const grant = new VideoGrant();
    // Grant token access to the Video API features
    token.addGrant(grant);

    // Serialize the token to a JWT string and include it in a JSON response
    socket.emit("tokan", {
      identity: identity,
      token: token.toJwt()
    });
  });

  socket.on("declineCall",(data)=>{
    io.sockets.in(data.callingUser._id).emit("declineKnow", "declined");
  })
  socket.on("outGoingLeave",(data)=>{
    io.sockets.in(data.selectedUser._id).emit("outGoingDecline", "declined");
  })

  socket.on("getAll", () => {
    userSchema
      .find()
      .then(res => {
        let userArray = [];
        res.forEach(item => {
          let name = item.name;
          let _id = item._id;
          let email = item.email
          let obj = { _id, name, email };
          userArray.push(obj);
        });

        socket.emit("allUsers", userArray);
      })
      .catch(err => {
        socket.emit("allUsers", "error");
      });
  });
  socket.on("sendCall", data => {
    let dataToSend = {
      roomName: data.roomName,
      callingUser: data.callingUser
    }
    io.sockets.in(data.user._id).emit("recCall", dataToSend);
  });

  socket.on("disconnect", function() {
    console.log("user disconnected");
    var i = onLineUsers.indexOf(socket.id);
    onLineUsers.splice(i, 1);

  });
});

///user routes
app.use("/user", userRoute);
// app.use('/todo/api/v1.0', todosRoutes);

app.use(express.static("./public"));
