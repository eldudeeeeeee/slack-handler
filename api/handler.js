const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log("📩 Incoming request");
  console.log("🔍 Headers:", req.headers);
  console.log("📦 Body:", req.body);

  res.status(200).send("✅ Slack handler received your request!");
});

module.exports = app;
module.exports.handler = serverless(app);
