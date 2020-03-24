const connection = require('../database/connection.js')

module.exports = { 
  async profile(req, res) { 
      const ong_id = req.headers.authorization
      const perfil = await connection('incidents').where('ong_id', ong_id).select('*')
      return res.json(perfil)
  }



}