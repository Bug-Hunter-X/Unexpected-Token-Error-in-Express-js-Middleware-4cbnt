const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const app = express();
const port = 3000;

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req, res, next) => {
  req.body = { ...req.body, newProperty: 'newValue' };
  next();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});