import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/api/ping', (_req, res) => {
  res.send('pong!');
});

app.listen(PORT, () => {
    console.log(`⚡ﻌ Server is running at http://localhost:${PORT}`);
});