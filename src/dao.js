const sqlite3 = require('sqlite3')
const Promise = require('bluebird')

class DAO {
    
  // Retorna um novo objeto de banco de dados e abre a conexão automaticamente.
  constructor(dbFile) {
    this.db = new sqlite3.Database(dbFile, (err) => {
      if (err) {
        console.log('Erro ao conectar', err)
      } else {
        console.log('Conectado com sucesso')
      }
    })
  }

  /*
  Executa a consulta SQL com os parâmetros especificados e chama o retorno de chamada posteriormente. 
  Ele não recupera nenhum dado do resultado. 
  A função retorna o objeto Database para o qual foi chamado para permitir o encadeamento de funções.
  */
  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          console.log('Erro ao executar o sql: ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve({ id: this.lastID })
        }
      })
    })
  }

  /*
  Executa a consulta SQL com os parâmetros especificados e chama o retorno de chamada 
  com a primeira linha de resultado posteriormente. 
  A função retorna o objeto Database para permitir o encadeamento de funções. 
  Os parâmetros são os mesmos da função run
  */
  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, result) => {
        if (err) {
          console.log('Erro ao executar o sql: ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  /*
  Executa a consulta SQL com os parâmetros especificados e chama o retorno de chamada
  com todas as linhas de resultados posteriormente.
  A função retorna o objeto Database para permitir o encadeamento de funções.
  Os parâmetros são os mesmos da função run
  */
  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.log('Erro ao executar o sql: ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }
}

module.exports = DAO