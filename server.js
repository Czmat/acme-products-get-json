const express = require('express');
const app = express();
const port = 3006;
const path = require('path');
//express.static(root, [options]);

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './index.html')));

app.get('/api/products', (req, res) =>
  res.sendFile(path.join(__dirname, './products.json'))
);
app.get('/api/companies', (req, res) =>
  res.sendFile(path.join(__dirname, './companies.json'))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
