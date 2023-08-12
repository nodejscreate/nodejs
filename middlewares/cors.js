const cors = require("cors");

// Middleware pour gérer les CORS
const corsMiddleware = cors({
  // On peut spécifier le lien du site depuis lequel on souhaite avoir les requêtes
  // origin: "https://example.com"
  origin: "*", // autoriser les requêtes depuis n'importe quel domaine
  methods: ["GET", "POST", "PUT", "DELETE"], // autoriser certaines méthodes
  allowedHeaders: ["Content-Type", "Authorization"], // autoriser certaines en-têtes
});

module.exports = corsMiddleware;
