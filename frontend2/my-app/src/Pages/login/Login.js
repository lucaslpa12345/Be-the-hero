import React, {useState} from 'react'
import imagehroes from '../../assets/heroes.png'
import imagelogo from '../../assets/logo.svg'
import './estilo.css'
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'


export default function Login()  { 
const [id, setID] = useState()
const history = useHistory()


async function handleLogin(e) {
  e.preventDefault() 
  
  try { 
    const response = await api.post('session', {id}) 
     localStorage.setItem('ongId', id)
     localStorage.setItem('ongNome', response.data.nome)

     history.push('/perfil')
  } catch(error) {alert('Falha ao logar') }

}

     return (
      <div  className='LoginContainer'> 
          
          <section className='Login'>
          
           <img src= {imagelogo}  alt='imagem logo'></img>
           
            <form className='Form' onSubmit={handleLogin}> 
           
           <h1 clssName='faça'>Faça seu login </h1>

           <input type="text" placeholder='Sua id' value= {id} onChange = {e =>setID(e.target.value)}/>

           <button className= 'button'> Entrar </button>
           <Link className='Link'to="/registrar"><FiLogIn size={16} color='#E02041'/>Não possuo uma id</Link>
           </form>     
         </section> 

       <img src={imagehroes} alt="imagem heroes"/>
         </div> 



      )





}