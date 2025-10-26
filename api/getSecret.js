export default function handler(req, res) {
  const secret = "FLEET";
  res.status(200).json({ success: true, secret });
}
