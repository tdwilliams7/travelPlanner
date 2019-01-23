const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("morgan");
const db = require("./database/db");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(helmet());
app.use(logger("combined"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
