import express from 'express';

const app = express();
const PORT = 7000;

app.get('/', (req, res) => {
  res.json({mes: "Vinith"})

})

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});