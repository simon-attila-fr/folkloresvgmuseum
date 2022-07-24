const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "users";

  findByEmail(user) {
    return this.connection.query(
      `SELECT id, pseudo, role FROM ${UserManager.table} WHERE email = ?`,
      [user]
    );
  }

  findByPseudo(user) {
    return this.connection.query(
      `SELECT id, email, role FROM ${UserManager.table} WHERE pseudo = ?`,
      [user]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (pseudo, email, password, role) values (?, ?, ?, ?)`,
      [user.pseudo, user.email, user.password, user.role]
    );
  }
}

module.exports = UserManager;
