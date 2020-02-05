const express = require('express');

const app = express();
const port = 3010;
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/entry', (req, res) => {
  axios.get('http://localhost:3002/entry')
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.statusCode(500);
      res.end();
    });
});

app.get('/test1', (req, res) => {
  axios.get('http://localhost:3011/test1')
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.statusCode(500);
      res.end();
    });
});

app.get('/products/7', (req, res) => {
  axios.get('http://localhost:3007/products/7')
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.statusCode(500);
      res.end();
    });
});


app.listen(port, () => console.log(`Now listening on port ${port}`));
