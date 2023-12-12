const mongoose = require("mongoose");

// Schema represents a class which we will create an object from it.
const Schema = mongoose.Schema;
// Create a profile schema object
const profileSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

// Create a model based on the schema
const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
