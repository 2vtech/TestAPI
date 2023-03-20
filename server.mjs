// const path = require('path');
// const express = require('express');

import path from 'path';
import express from 'express';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.text());
app.use(express.json());

app.get('/', async (req, res)=>
{
  console.log(`${req.method} Request: ${req.url}`);
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/favicon.ico', async (req, res)=>
{
  console.log(`${req.method} Request: ${req.url}`);
  res.sendFile(path.join(__dirname, '/public/favicon.ico'));
});

app.get('/build/*', async (req, res)=>
{
  console.log(`${req.method} Request: ${req.url}`);
  const pathname = '/public' + req.url;
  res.sendFile(path.join(__dirname, pathname));
});

// const mtest = require('./api/test.js');
import dotest from './api/test.js';

app.get('/api/test', async (req, res)=>
{
  console.log(`${req.method} Request: ${req.url}`);
  // return mtest.dotest(req, res);
  return dotest(req, res);
});

app.all('*', (req, res)=>
{
  console.log(`${req.method} Request: ${req.url}`);
  res.writeHead(404);
  res.end();
});

const PORT_ADDR = process.env.PORT;
// const PORT_ADDR = 8080;

app.listen(PORT_ADDR, ()=> { console.log(`Server running...`) });
