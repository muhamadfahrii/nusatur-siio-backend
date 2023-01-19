const express = require("express");
const reservasiApi = require("./reservasi");
const app = express();

const api = "/api/v1";

// http://localhost:<port> + /api/v1
app.use(api, reservasiApi);

module.exports = app;
