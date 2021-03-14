const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/search", function (req, res) {
  if (req.query.params.trim() !== "") {
    console.log(req.query.params);
    fetch(
      `https://www.metaweather.com/api/location/search/?query=${req.query.params}`
    )
      .then((res) => res.json())
      .then((response) => res.send(JSON.stringify(response)))
      .catch((err) => console.log(err));
  } else {
    fetch("https://www.metaweather.com/api/location/search/?query=null")
      .then((res) => res.json())
      .then((response) => res.send(JSON.stringify(response)))
      .catch((err) => console.log(err));
  }
});

app.get("/", function (req, res) {
  if (req.query.params.trim() !== "") {
    fetch(`https://www.metaweather.com/api/location/${req.query.params}/`)
      .then((res) => res.json())
      .then((response) => res.send(JSON.stringify(response)))
      .catch((err) => console.log(err));
  } else {
    fetch("https://www.metaweather.com/api/location/null/")
      .then((res) => res.json())
      .then((response) => res.send(JSON.stringify(response)))
      .catch((err) => console.log(err));
  }
});

app.listen(3000);
