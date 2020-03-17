const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./src/routes");

const app = express();

mongoose.connect(
  "mongodb+srv://teste:teste@cluster0-8x5fd.mongodb.net/teste?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080);
