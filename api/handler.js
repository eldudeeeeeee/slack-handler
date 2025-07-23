export default async function handler(req, res) {
  console.log("Incoming request:", req.method, req.body);
  res.status(200).json({ message: "Slack handler is running ✅" });
}
