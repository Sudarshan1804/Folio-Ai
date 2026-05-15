const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password should be at least 6 characters long"],
      select: false, // Don't return password by default
    },
  },
  { timestamps: true }
);

// Check if model exists before compiling to avoid OverwriteModelError
const User = mongoose.models?.User || mongoose.model("User", UserSchema);

module.exports = User;
