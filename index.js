const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 3000;
const chefs = require("./data/chefs.json");
app.get("/", (req, res) => {
  res.send("bhuribhoj server is comming");
});
app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find((c) => c.id == id);
  res.send(selectedChef);
});
app.listen(port, () => {});
