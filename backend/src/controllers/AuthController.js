const argon2 = require("argon2");
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
const models = require("../models");

class UserController {
  static signup = async (req, res) => {
    const { pseudo, email, password } = req.body;

    if (!pseudo || !email || !password) {
      return res.status(400).send("Pseudo, email and password are obligatory.");
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
          res.status(201).send({ id: result.insertId, email, pseudo, role });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send({ error: err.message });
        });
    } catch (err) {
      res.status(500).send("An error has been occured.");
    }
    return null;
  };
}

module.exports = UserController;
