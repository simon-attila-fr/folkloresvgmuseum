const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const models = require("../models");

class UserController {
  static signup = async (req, res) => {
    const { pseudo, email, password } = req.body;

    if (!pseudo || !email || !password) {
      res.status(400).send("Pseudo, email and password is obligatory.");
    }

    try {
      const hash = await argon2.hash(password);
      const role = "NotAdmin";
      models.users
        .insert({
          pseudo,
          email,
          password: hash,
          role,
        })
        .then(([result]) => {
          res.status(201).send({ id: result.insertId, email, pseudo });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send({
            error: err.message,
          });
        });
    } catch (err) {
      res.status(500).send("Erreur lors du chiffrement du mot de passe");
    }
  };
}

module.exports = UserController;
