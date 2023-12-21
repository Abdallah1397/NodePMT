const express = require("express");
const router = express.Router();
const profileRouter = require("./profiles");
const authRouter = require("./auth");

router.use("/profiles", profileRouter);
router.use("/auth",authRouter);

module.exports = router;
