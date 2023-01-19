const express = require("express");
const routes = express();
const { createReservasi } = require("../controller/reservasi");

// http://localhost:<port> + /api/v1 + /reservasi
routes.post("/reservasi", createReservasi);

module.exports = routes;
