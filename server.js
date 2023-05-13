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

let PORT_ADDR = process.env.PORT;
if (PORT_ADDR === undefined)
    PORT_ADDR = 3000; // for localhost

app.listen(PORT_ADDR, ()=> { console.log(`Server running on port: ${PORT_ADDR}...`) });
