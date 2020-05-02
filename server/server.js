require('../config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/user', (req, res) => {
  res.json('Hello world');
});

app.post('/user', (req, res) => {
  const body = req.body;

  if (body.name === undefined) {
    res.status(400).json({
      ok: false,
      message: 'The name is necessary'
    });
    return;
  }

  res.json(body);
});

app.listen(process.env.PORT, () => {
  console.log('Server on port', process.env.PORT);
});