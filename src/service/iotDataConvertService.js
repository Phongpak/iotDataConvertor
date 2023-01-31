exports.iotDataConvert = (item, data) => {
  const hexToDecimal = (hex) => parseInt(hex, 16);
  const fallDetect = hexToDecimal(data.slice(2, 4)).toString();
  const stepCount = hexToDecimal(data.slice(4, 8));
  const temperature = hexToDecimal(data.slice(8, 12)) / 100;
  const heartRate = hexToDecimal(data.slice(12, 14));
  const spo2 = hexToDecimal(data.slice(14, 16)) / 100;
  const bloodPressure =
    hexToDecimal(data.slice(16, 18)) + "/" + hexToDecimal(data.slice(18, 20));
  const lat =
    (data.slice(20, 21) == "0" ? 1 : -1) *
    (hexToDecimal(data.slice(21, 23)) +
      hexToDecimal(data.slice(23, 27)) / 10000);
  const lng =
    (data.slice(27, 28) == "0" ? 1 : -1) *
    (hexToDecimal(data.slice(28, 30)) +
      hexToDecimal(data.slice(30, 34)) / 10000);

  return {
    device: item,
    fallDetect,
    stepCount,
    temperature,
    heartRate,
    spo2,
    bloodPressure,
    lat,
    lng,
    dateTime: new Date().toJSON(),
  };
};
