import React, {useState ,useEffect}  from 'react'
import './perfis.css'
import imagemlogo from '../../assets/logo.svg'
import { Link, useHistory} from 'react-router-dom'
import { FiPower,FiTrash2 }    from 'react-icons/fi'
import api from '../../services/api'


export default function Perfil () { 


  
   const history = useHistory()
  
  const [incidents, setIncidents] = useState([])

  const ongId = localStorage.getItem('ongId')

  const ongNome = localStorage.getItem('ongNome')
  
  useEffect(() => { api.get('perfil', {headers: {Authorization: ongId,} }).then
  (response => { setIncidents(response.data)} ) },  [ongId] )

   async function handleDeleteIncidente(id) { 
     try { 
          await api.delete(`incidents/${id}`, {headers: { Authorization: ongId,}})
          setIncidents(incidents.filter(incident => incident.id  !== id))
     } catch(error) { alert('Erro ao deletar')} }

     function handleLogout() { 
      localStorage.clear()
      history.push('/')
     }

    return ( 
      <div className='PerfilContainer'>  
        <header > 
        <img src={imagemlogo} alt='Be the Hero'></img>
    <span>Seja bem vinda(o) {ongNome}</span>
        <Link className='button' to='incidents/new'>Cadastrar novo caso</Link> 
        <button type='button' onClick= {handleLogout}><FiPower sice={18} color= '#E02041'></FiPower></button>   
    

        </header>
        <h1>Casos registrados</h1>
        <ul>
     
        {incidents.map(
            incident => 
            <li key = {incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
           
            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>
           
            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)} </p>
            <button type='button' onClick= { () =>  handleDeleteIncidente(incident.id)} ><FiTrash2 size={20} color='#a8a8b3'></FiTrash2></button>
            </li>
        ) }
             
   
              
          
          </ul>

      </div>
    )
 }