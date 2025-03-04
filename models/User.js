const mongoose = require("mongoose");

const UserSchema = {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"], // Define allowed roles
    default: "user",
  },
};

module.exports = mongoose.model("User", UserSchema);
