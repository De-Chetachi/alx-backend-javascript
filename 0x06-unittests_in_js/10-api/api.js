const express = require('express');

const app = express();
const port = 7865;

app.get('/', function(req, res) {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', function(req, res) {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});


app.get('/available_payments', function(req, res) {
  res.send({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', function(req, res) {
  const user = req.body.userName || req.json.userName;
  if (user) {
    res.send(`Welcome ${user}`);
  } else {
    res.status(404).send();
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});