import React, {useState} from 'react'
import './incidente.css'
import imagelogo from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api' 

export default  function incidente() { 
    const [title, setTitle]  = useState()
    const [description, setDescription] = useState()
    const [value, setValue] = useState()
const ongId = localStorage.getItem('ongId')
 async function handleNewIncident(e) {
      e.preventDefault  
  const data = { 
    title, 
    description,
    value 
  } ;
     try {  
         await api.post ( 'incidents', data, {headers: { Authorization: ongId}})  
    history.push('/perfil')      
  } catch (error) { alert('erro ao cadastrar')}
    }

    return   <div className='incidentContainer'> 
                 <div className='conteudo'>
                <section className='doidera'> 
               <img src= {imagelogo}  alt='imagem logo'></img>
               
                <p>Descreça detalhadamente o caso para que possamos encontrar herois que vão nos ajudar a solucionalo
                </p>
                <Link className= 'Link' to='/perfil' ><FiArrowLeft size={18} color='#E02041'/>Voltar Para o perfil</Link>
                </section>
                <form onSubmit= {handleNewIncident}> 
                <h1>Registrar um caso</h1>
                 <input placeholder='Nome da causa' 
                 value={title}
                 onChange= {e => setTitle(e.target.value)} />
                 <textarea placeholder='Descreva o caso' value={description}
                 onChange= {e => setDescription(e.target.value)}/>
                 <input  placeholder='Valor' value={value}
                 onChange= {e => setValue(e.target.value)}/>
                  <div className='buttonGrup'>

                  <button className='button' type='submit'>Cadastrar Caso</button>
                 
                  </div>
                
                </form>
                </div>
         
             </div>
}