const mongoose = require("mongoose");

// Schema represents a class which we will create an object from it.
const Schema = mongoose.Schema;
// Create a profile schema object
const profileSchema = new Schema({
  name: { type: String, required: true },
  phone: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        // Add phone number validation logic
        return /\d{10}/.test(v); // Example: 10-digit number
      },
      message: "Phone number is not valid",
    },
  },
  age: { type: Number, min: 18, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        // Add email validation logic
        return /\S+@\S+\.\S+/.test(v);
      },
      message: "Email is not valid",
    },
  },
});

// Create a model based on the schema
const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
