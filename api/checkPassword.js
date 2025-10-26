export default function handler(req, res) {
  const { password } = req.query;
  if (password === 'BOEING787') {
    res.status(200).json({ success: true });
  } else {
    res.status(403).json({ success: false });
  }
}
