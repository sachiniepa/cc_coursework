'use strict';

const express = require('express');

const PORT = 5000;
const HOST = '0.0.0.0';

const app = express();

app.get('/add/', (req, res) => {
  res.send('Adding to constellation microservice mock response \n');
});

app.get('/remove/', (req, res) => {
    res.send('Removing from constellation microservice mock response \n');
  });

  app.get('/monitor/', (req, res) => {
    res.send('Monitor satelites microservice mock response \n');
  });

  app.get('/track/', (req, res) => {
    res.send('Track orbit microservice mock response \n');
  });

  app.get('/control/', (req, res) => {
    res.send('Control orbit microservice mock response \n');
  });


app.listen(PORT, HOST);

console.log(`Running version 3 on http://${HOST}:${PORT}`);