const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/CE1");

const loginSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    skill: {
      type: String,
    },
    email: {
      type: String,
    },
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    profilePic: { 
      type: String, default: "default.jpg" },
    password: {
      type: String,
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("login", loginSchema);
