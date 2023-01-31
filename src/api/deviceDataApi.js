const axios = require("axios");
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjc1MTUyMDk4LCJleHAiOjE2Nzc3NDQwOTh9.vQBvJ1yGWPB7rydOsVFBx9vCuW9WauHZUrnpnEhfMv0`;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (err) => Promise.reject(err)
);

exports.createDeviceData = (reqData) =>
  axios.post("https://stickback.careervio.com/api/device-datas", reqData);
