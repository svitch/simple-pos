const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const validateSell = require('./validation/sell');

// Create server
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Products
const goods = [
  {
    'uuid': '84376f4a-b00e-11e8-96f8-529269fb1459',
    'name': 'Масло Крестьянка',
    'quantity': 15,
    'price': 98.5
  },
  {
    'uuid': '3a9e3220-f20a-4f59-a8dd-a3f401859592',
    'name': 'Сыр Пармезан',
    'quantity': 10,
    'price': 580
  },
  {
    'uuid': '57ec7583-144b-4798-842a-0e14f5499e2d',
    'name': 'Молоко Бурёнка',
    'quantity': 25,
    'price': 45.5
  },
  {
    'uuid': '058d0937-da5a-4b9c-95ee-0aa37af724ca',
    'name': 'Сосиски Петрович',
    'quantity': 40,
    'price': 120
  }
];

// Endpoints
app.get('/goods', (req, res) => {
  console.log(req.headers['x-autorization']);
  res.json(goods);
});
app.post('/sell', (req, res) => {
  const { errors, isValid } = validateSell(req.body);

  if (!isValid) return res.status(400).json({ msg: errors });

  return res.status(200).json({ msg: '' });
});

// Server static assets for production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Initialize server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));