const { Router } = require("express");

const FormController = require("./controllers/FormController");

const routes = Router();

routes.post("/form", FormController.store);

module.exports = routes;
