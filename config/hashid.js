const HashId = require("hashids/cjs");

const hashId = new HashId(
  // Ajouter entre les griffes une série de 64 caractères composée de chifffres et de lettres minuscules
  ""
);

module.exports = hashId;
