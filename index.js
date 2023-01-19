const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./routes");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(api);

app.listen(port, () => {
  // http://localhost:8000
  console.log(`Server running in http://localhost:${port}`);
});
