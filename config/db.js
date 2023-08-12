const mongoose = require("mongoose");
require("dotenv").config();

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connexion avec la base de données réussie");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = ConnectDB;
