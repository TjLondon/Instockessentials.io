const express = require("express");
const warehouseRoute = require('./routes/warehouse/warehouse')
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

app.use("/", warehouseRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("we're listening...");
});
