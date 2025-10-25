export default function handler(req, res) {
  const { password } = req.body;

  if (password === "BOEING787") {
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false, message: "Access Denied 🚫" });
  }
}
