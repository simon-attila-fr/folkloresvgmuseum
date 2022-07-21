const AbstractManager = require("./AbstractManager");

class ContentTextManager extends AbstractManager {
  static table = "contenttext";

  findById(id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }
}

module.exports = ContentTextManager;
