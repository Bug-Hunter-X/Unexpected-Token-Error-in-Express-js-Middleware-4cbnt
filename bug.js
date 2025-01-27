const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error: Unexpected token error when using a middleware function that modifies the request object.
// Example:
app.use((req, res, next) => {
  req.body = { ...req.body, newProperty: 'newValue' }; // This line might cause the error
  next();
});