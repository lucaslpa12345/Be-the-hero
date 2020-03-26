import {BrowserRouter, Switch, Route}  from 'react-router-dom'
import React from 'react' 
import incidente from './Pages/novoincident/incidente'
import Login from  './Pages/login/Login'
import registrar from './Pages/registro/registro'
import perfil from './Pages/perfis/Perfil'

export default function Routes() { 
    return ( 
        <BrowserRouter> 
        <Switch>
             <Route path='/incidents/new' component = {incidente}/>
             <Route path='/' exact component= {Login}/>
             <Route path='/registrar' component = {registrar}/>
             <Route path='/perfil' component = {perfil}/>
        </Switch>
        </BrowserRouter> 
    )
}