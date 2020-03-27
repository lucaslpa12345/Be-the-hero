import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Appstack = createStackNavigator()

import Incidents from './pages/incidents/incidents'
import Detail from './pages/detail/detail'

export default function Routes() { 
    return (
         <NavigationContainer>
            <Appstack.Navigator screenOptions= {{headerShown: false}}>
                <Appstack.Screen name='Incidents' component= {Incidents}/>
                <Appstack.Screen name= 'Detail' component= {Detail}/>
          </Appstack.Navigator>    
        
         </NavigationContainer>
    )
}