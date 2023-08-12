// Middleware pour forcer les réponses sous forme de JSON avec les codes HTTP adéquats
const jsonResponseMiddleware = (req, res, next) => {
  res.jsonResponse = (data, message, status = 200) => {
    res.status(status).json({ success: true, data, message });
  };

  res.errorResponse = (message, status = 400, optionalField) => {
    //OptionalField c'est pour ajouter des indications explicites aux erreurs

    if (optionalField) {
      res.status(status).json({
        success: false,
        message,
        error: optionalField,
      });
    } else {
      res.status(status).json({
        success: false,
        message,
      });
    }
  };
  next();
};

module.exports = jsonResponseMiddleware;
