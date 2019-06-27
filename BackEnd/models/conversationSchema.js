var mongoose = require("mongoose");

var conversationSchema = mongoose.Schema({
  id: String,
  callTime: Number,
  callingUser: String,
  outGoingUser: String,
  msg: String,
  createAt: String
});

var conversationModal = mongoose.model("conversation", conversationSchema);

module.exports = conversationModal;
