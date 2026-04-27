const express = require("express");
const router = express.Router();
const liveController = require("../controllers/liveController");

router.get("/live/:teacherId", liveController.getLiveContent);

module.exports = router;