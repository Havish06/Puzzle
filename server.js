const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// Entry password
const entryPassword = 'BOEING787';

// Secret message
const secretMessage = 'FLEET';

// Check entry password
app.post('/checkPassword', (req, res) => {
  const { password } = req.body;
  if (password === entryPassword) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Access Denied 🚫' });
  }
});

// Return secret message when puzzle solved
app.get('/getSecret', (req, res) => {
  res.json({ success: true, message: secretMessage });
});

// Serve index.html by default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
