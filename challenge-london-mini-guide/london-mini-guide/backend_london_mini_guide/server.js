const harrow = require("./data/Harrow.json");
console.log(harrow);

const express = require("express");
const app = express();
app.use(cors());

app.get("/pharmacies", (request, response) => {
  response.json(harrow.pharmacies);
});

app.listen(5000);

//test
