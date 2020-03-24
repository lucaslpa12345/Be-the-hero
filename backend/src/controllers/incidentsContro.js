const connection = require('../database/connection.js')

module.exports =  { 

          async delete(req,res) { 
         
          const {id} = req.params 
          const ong_id = req.headers.authorization
          const incidents = await connection('incidents').where('id', id).select('ong_id').first()

          if(incidents.ong_id !== ong_id ) { 
               return res.status(401).json({error: 'Não permitido'})
          }
    
       await connection('incidents').where('id', id).delete()

        return res.status(204).send()
  }, 





         async list(req, res) { 
            const [count] = await connection('incidents').count()
            console.log(count)

            const  { page = 1} = req.query
            const lista =
            await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .select('*')
            .limit(5).offset((page - 1)* 5)
            .select(['incidents.*', 'ongs.nome', 'ongs.email', 'ongs.whatsapp', 'ongs.city','ongs.UF'])  
            res.json(lista)
         } ,







         async create(req, res) { 
       const {title, description, value} = req.body
       const ong_id = req.headers.authorization

   const [id] =  await connection('incidents').insert({ 
     title, 
     description, 
     value,
     ong_id
     } )
     res.json({id})
    
    }
}