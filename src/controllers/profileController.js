const Profile = require("../models/profiles");

// Get all profiles
const getAllProfiles = (req, res) => {
  Profile.find()
    .then((profile) => {
      if (profile.length === 0) {
        return res.status(404).json({ message: "No profiles found" });
      }
      res.json(profile);
    })
    .catch(() => {
      return res.status(500).json({ message: "Interal Server Error" });
    });
};
// Get single profile by ID
const getSingleProfile = (req, res) => {
  // Profile Id
  const profileId = req.params.id;
  Profile.findById(profileId)
    .then((profile) => {
      res.json(profile);
    })
    .catch(() => {
      res.status(404).json({ message: "Profile not found" });
    });
};
// Create a new profile
const createNewProfile = async (req, res) => {
  try {
    // Destruct the req.body
    const { name, phone, email, age } = req.body;
    // Validate input data
    if (!name || !age || !email || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }
    // Check for existing profile with same email address
    const existingProfile = await Profile.findOne({ email });
    if (existingProfile) {
      return res.status(409).json({ message: "Email already in use." });
    }
    // Create new profile and save it to database
    const createdProfile = new Profile(req.body);
    await createdProfile.save();
    res.status(201).json(createdProfile);
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).send(err.message);
    } else {
      res.status(500).send("Interal Server Error");
    }
  }
};
// Update an existing profile
const updateExistingProfile = (req, res) => {
  const profileId = req.params.id;
  Profile.findByIdAndUpdate(profileId, { ...req.body }, { new: true })
    .then(() => {
      res.json({ message: "The profile updated successfully" });
    })
    .catch(() => {
      if (err.name === "ValidationError") {
        res.status(400).send(err.message);
      } else {
        res.status(500).send("Interal Server Error");
      }
    });
};
// Delete an existing profile
const deleteProfile = (req, res) => {
  // profileID
  const profileId = req.params.id;
  // Find the user by ID from DB and Delete it
  Profile.findByIdAndDelete(profileId)
    .then(() => {
      res.json({ message: "The profile deleted successfully" });
    })
    .catch(() => {
      if (err.name === "ValidationError") {
        res.status(400).send(err.message);
      } else {
        res.status(500).send("Interal Server Error");
      }
    });
};
module.exports = {
  getAllProfiles,
  getSingleProfile,
  createNewProfile,
  updateExistingProfile,
  deleteProfile,
};
