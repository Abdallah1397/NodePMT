const express = require("express");
const router = express.Router();
const {
  getAllProfiles,
  getSingleProfile,
  deleteProfile,
  createNewProfile,
  updateExistingProfile,
} = require("../controllers/profileController");

// Routers
router.get("/profiles", getAllProfiles);
router.get("/profiles/:id", getSingleProfile);
router.post("/profiles", createNewProfile);
router.put("/profiles/:id", updateExistingProfile);
router.delete("/profiles/:id", deleteProfile);

module.exports = router;
