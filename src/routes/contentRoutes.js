const express = require("express");
const router = express.Router();

const contentController = require("../controllers/contentController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const upload = require("../utils/multer");

// Teacher upload
router.post(
  "/upload",
  authMiddleware,
  roleMiddleware("teacher"),
  upload.single("file"),
  contentController.uploadContent
);

// Principal approve
router.put(
  "/approve/:id",
  authMiddleware,
  roleMiddleware("principal"),
  contentController.approveContent
);

// Principal reject
router.put(
  "/reject/:id",
  authMiddleware,
  roleMiddleware("principal"),
  contentController.rejectContent
);

module.exports = router;