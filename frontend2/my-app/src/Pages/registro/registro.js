import React, {useState} from 'react'
import './estilo.css'
import imagelogo from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'


export default function Registrar(){ 
 
 const [nome , setNome] = useState('')
 const [email , setEmail] = useState('')
 const [whatsapp , setWhatsapp] = useState('')
 const [city , setCity] = useState('')
 const [UF , setUF] = useState('')

 const history = useHistory()

 async function handleRegister(e) { 
     e.preventDefault()
     const data = { 
         nome, 
         email,
         whatsapp,
         city,
         UF
     }

   try {const res =  await  api.post('ongs', data) 
  
    alert(`Seu id de acesso: ${res.data.id}`)
    history.push('/')
    }  catch (error)  { alert('Erro ao cadastrar')}
 }



    return <div className='registroContainer'>
            <div className='conteudo'>
               <section className='doidera'> 
               <img src= {imagelogo}  alt='imagem logo'></img>
                
                <p>Faça seu cadastro!! 
                    <br/>Comece agora e encontre milhares de pessoas QUE QUEREM AUDAR sua ONG!!! </p>
                <Link className= 'Link' to='/' ><FiArrowLeft size={18} color='#E02041'/>Voltar Para o Início</Link>
                </section>
                <form  onSubmit={handleRegister}> 
                <h1>Cadastro</h1>
                 <input placeholder='Nome da ONG' 
                 value={nome} 
                 onChange={e=> 
                 setNome(e.target.value)}  />
               
                 <input type= 'email'placeholder='E-mail'
                  value={email} 
                  onChange={e=> 
                  setEmail(e.target.value)}/>
               
                 <input  placeholder='Telefone pra contato'
                  value={whatsapp}
                   onChange={e=>
                    setWhatsapp(e.target.value)} />
                 <div className='inputGrup'
                 > 
                   
                 <input placeholder='Cidade' 
                     value={city}
                      onChange={e=>
                       setCity(e.target.value)}/>
                   
                 <input placeholder='UF' style={{width: 80}}
                      value={UF} 
                      onChange={e=> setUF(e.target.value)}/>
              
                 </div>
                 <button className='button' type='submit'>Cadastrar ONG </button>
                </form>


            </div>


          </div>
}