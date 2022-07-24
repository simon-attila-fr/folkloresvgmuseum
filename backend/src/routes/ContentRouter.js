const express = require("express");

const ContentTextController = require("../controllers/ContentTextController");

const router = express.Router();

router.get("/text", ContentTextController.browse);
router.get("/text/:id", ContentTextController.read);

module.exports = router;
