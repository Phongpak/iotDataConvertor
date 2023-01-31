require("dotenv").config();
const mqtt = require("mqtt");
const port = process.env.PORT;
const host = process.env.HOST;
const connectUrl = `mqtt://${host}:${port}`;
const deviceApi = require("../api/deviceApi");
const deviceDataApi = require("../api/deviceDataApi");
const client = mqtt.connect(connectUrl, {});
const { iotDataConvert } = require("./iotDataConvertService");
exports.iotSubscribe = async (deviceList) => {
  if (!deviceList) {
    const res = await deviceApi.getDeviceList();
    deviceList = res.data.data.map((item) => item.attributes.deviceName);
    console.log(deviceList);
  }
  deviceList.map((item) => {
    client.unsubscribe(`sampledata/${item}/values`, () => {
      console.log(`Unsubscribe to topic sampledata/${item}/values`);
    });

    client.on("connect", () => {
      console.log("Connected");
      client.subscribe(`sampledata/${item}/values`, () => {
        console.log(`Subscribe to topic sampledata/${item}/values`);
      });
    });

    client.on("message", async (topic, payload) => {
      try {
        const data = payload.toString();
        if (payload) {
          // await deviceDataApi.createDeviceData({
          //   data: iotDataConvert(item, data),
          // });
        }
        // console.log(iotDataConvert(item, data));
      } catch (err) {
        console.log(err.message);
      }
    });
  });
};
