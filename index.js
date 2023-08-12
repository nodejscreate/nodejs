const express = require("express");
const ConnectDB = require("./config/db");
const container = require("./container");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();

// Creation du serveur
const app = express();

// Connection à la base de données
ConnectDB();

// Récupération des middlewares du container
const corsMiddleware = container.resolve("corsMiddleware");
const jsonResponse = container.resolve("jsonResponseMiddleware");

// Ajout des middlewares à l'app
app.use(corsMiddleware);
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(jsonResponse);

// Les routes

// Demarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Ecoute sur le port " + PORT);
});
