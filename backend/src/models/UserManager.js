const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "users";

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (pseudo, email, password, role) values (?, ?, ?, ?)`,
      [user.pseudo, user.email, user.password, user.role]
    );
  }
}

module.exports = UserManager;