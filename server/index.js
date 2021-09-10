const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const warehousesRoute = require('./routes/warehouse/warehouse')
app.use("/warehouses", warehousesRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("we're listening...");
});
