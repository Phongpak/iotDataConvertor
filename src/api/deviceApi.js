const axios = require("axios");
exports.getDeviceList = () =>
  axios.get("https://stickback.careervio.com/api/devices");
