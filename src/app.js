const cors = require("cors");
const express = require("express");
const app = express();
const iotSubscribeService = require("./service/iotSubscribeService");
const deviceRoute = require("./route/deviceRoute");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//useEffect()
iotSubscribeService.iotSubscribe();
app.use("/device", deviceRoute);
