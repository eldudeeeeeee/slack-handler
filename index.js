const express = require("express");
const app = express();

// Middleware to parse JSON and form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root endpoint
app.get("/", (req, res) => {
  res.send("Slack handler is running!");
});

// Slack handler endpoint
app.post("/handler", (req, res) => {
  console.log("📩 Incoming request to /handler");
  console.log("🔍 Headers:", req.headers);
  console.log("🧾 Body:", req.body);

  // Respond to Slack or any bot
  res.status(200).send("✅ Fake Slack handler received your request!");
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
