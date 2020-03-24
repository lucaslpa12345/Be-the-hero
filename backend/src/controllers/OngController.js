const crypto = require('crypto')
const connection = require('../database/connection.js')


module.exports =  { 

    async create(request, res)  { 

  
        const  {nome, email, whatsapp, city , UF} = request.body
        const id = crypto.randomBytes(4).toString('HEX')
           
   await connection('ongs').insert({ 
    id,
    nome,
    email,
    whatsapp,
    city,
    UF
   })      
        return  res.json ({id})
   
       
   },
   async list(req, res)   { 
    const ongs = await connection('ongs').select('*')

    return res.json(ongs)
}



}