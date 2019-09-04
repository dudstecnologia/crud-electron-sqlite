class Contato {

    constructor(dao) {
      this.dao = dao
    }

    create(data) {
      return this.dao.run(
        'INSERT INTO contatos (nome, telefone) VALUES (?, ?)', [data]
      )
    }

    getById(id) {
      return this.dao.get(
        `SELECT * FROM contatos WHERE id = ?`, [id]
      )
    }

    getAll() {
      return this.dao.all(`SELECT * FROM contatos`)
    }

    update(data) {
      const { id, nome, telefone } = data
      return this.dao.run(
        `UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?`, [nome, telefone, id]
      )
    }

    delete(id) {
        return this.dao.run(
          `DELETE FROM contatos WHERE id = ?`, [id]
        )
      }
  }
  
  module.exports = Contato;