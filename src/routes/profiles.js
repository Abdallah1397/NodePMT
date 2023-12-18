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
router.get("/", getAllProfiles);
router.get("/:id", getSingleProfile);
router.post("/", createNewProfile);
router.put("/:id", updateExistingProfile);
router.delete("/:id", deleteProfile);

module.exports=router;