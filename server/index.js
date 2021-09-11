const express = require("express");
const warehouseRoute = require('./routes/warehouse/warehouse')
const app = express();
const cors = require("cors");
const inventoryRoute = require ('./routes/inventory/inventory.js')

require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

app.use("/warehouse", warehouseRoute);


app.use('/', (_req, _res, next) => {
  next();
})
//Inventories
app.use('/inventory', inventoryRoute)


//Server
const PORT = process.env.PORT || 8000;
app.listen(`${PORT}`, () => {
  console.log(`We're listening on ${PORT}...`);
});

