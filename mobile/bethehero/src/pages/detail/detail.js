import React from 'react'
import { Feather } from '@expo/vector-icons'
import {Text,  View ,Image,TouchableOpacity} from 'react-native'
import styles from  './estilo'
import LogoImg from '../../assets/logo.png'
import { useNavigation, use } from '@react-navigation/native'
export default  function Detail() { 
 
    const route = useRoute()

    const incident = route.params.incident
 
 

     
     const navigation = useNavigation()

function navigatback() {
    navigation.goBack()
}
  function sendemail() { 


  }

  function sendwhatsapp() { 

  }

    return  ( 
       <View style={styles.container}>
       
   
       <View style={styles.header}> 
     <Image source={ LogoImg}></Image>  
        <TouchableOpacity onPress={navigatback}>
            <Feather name='arrow-left' size={28} calor= '#E82041'></Feather>
        </TouchableOpacity>
       </View> 
          <View>
<Text style={styles.incidentproperty}>ong</Text>
<Text style= { styles.incidentvalue}>{incident.nome}</Text>

<Text style={styles.incidentproperty}>caso</Text>
<Text style= { styles.incidentvalue}>{incident.nome} de {incident.city}/{incident.UF}</Text>

<Text style={styles.incidentproperty}>Valor</Text>
<Text style= { styles.incidentvalue}>{intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
        
           </View>
            <View style={styles.contactbox}> 
               <Text style={styles.Herotitle}> Seja um heroi agora entrando em contato e ajudando!!
</Text>
               
               <Text style={styles.description}> Entre em contato:  </Text>
      <View style={styles.action}> 
      <TouchableOpacity style={styles.actiontext} onPress={() => {}}
      >Whatsapp</TouchableOpacity> 
        
 
      <TouchableOpacity style= {styles.actiontext} onPress={()=> {}}>E-mail</TouchableOpacity>

      </View>

    </View>

     </View>
    )
}