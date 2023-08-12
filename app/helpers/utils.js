const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.createToken = (id, maxAge) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN, {
    expiresIn: maxAge,
  });
};

// Ici vous mettrez toutes les fonctions secondaires qui ne sont pas directement
// dans le projet et qui sont quand même utilisées
