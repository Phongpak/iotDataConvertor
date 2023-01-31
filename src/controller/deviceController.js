const { iotSubscribe } = require("../service/iotSubscribeService");
exports.deviceData = async (req, res, next) => {
  try {
    const deviceList = req.body;
    iotSubscribe(deviceList);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
