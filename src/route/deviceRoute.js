const express = require("express");
const router = express.Router();
const deviceController = require("../controller/deviceController");
router.post("/getDevice", deviceController.deviceData);

module.exports = router;
