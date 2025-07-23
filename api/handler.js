const express = require("express");
const app = express();
const serverless = require("serverless-http");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Slack handler is running!");
});

app.post("/handler", (req, res) => {
  console.log("📩 Incoming request to /handler");
  console.log("🔍 Headers:", req.headers);
  console.log("🧾 Body:", req.body);
  res.status(200).send("✅ Fake Slack handler received your request!");
});

module.exports = app;
module.exports.handler = serverless(app);
