import React, {useState, useEffect} from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import LogoImg from '../../assets/logo.png'
import styles from './estilo'
import { Feather } from '@expo/vector-icons'
import { useNavigation , useRoute} from '@react-navigation/native'
import api from '../../services/api'
export default  function Incidents() { 
 
   const [incidents, setIncidents] = useState([])
   const [total, setTotal] = useState(0)
    const navigation = useNavigation()
 const [page, setPage] = useState(1) 
 const [load, setLoad] = useState(false)



   function navigateToDetail(incident) { 
       navigation.navigate('Detail', {incident})
   }
   async function loadincidents() { 

    if (load) { 
        return 
    }

    if (total>0 && incidents.length === total) { 
        return 
    } 
       setLoad(true)

       const response = await api.get('incidents', { params: { page}})
  
       setIncidents([...incidents, ...response.data])
       setTotal(response.headers['x-total-count'])
       setPage(page+1)
       setLoad(false)  
}
 useEffect(()=> {
    loadincidents()
 }, [])


    return  ( 
 
<View style= {styles.Container} > 



    <View style={styles.header}> 
     <Image source={ LogoImg}></Image>  
     <Text style={styles.headerText}> 
    Total de <Text style={styles.header.headerTextBold}>{total}casos</Text>
    </Text>
  </View> 




<Text style={styles.Title}>Bem Vindo!!</Text>
<Text style={styles.Descriptio}>Escolha um dos casos abaixo e salve vidas</Text>




<FlatList data= {[incidents]} style={styles.incidentlist} 
 
 keyExtractor={incident =>  String(incident.id)}
 showsVerticalScrollIndicator = {false}
 onEndReached={loadincidents}
 onEndReachedThreshold={0.2}
renderItem= {({ item: incident})=> ( <View style= { styles.incident}>
<Text style={styles.incidentproperty}>CASO</Text>
<Text style= { styles.incidentvalue}>{incident.nome}</Text>

<Text style={styles.incidentproperty}>Descrição</Text>
<Text style= { styles.incidentvalue}>{incident.title}</Text>

<Text style={styles.incidentproperty}>Valor</Text>
<Text style= { styles.incidentvalue}>{intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>

  
    <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(incident)} >
      <Text  style={ styles.detailsbuttontext}>  Ver mais detatalhes</Text>
       <Feather name= "arrow-right" size={18} color='#E02041'/>
    </TouchableOpacity>

       </View> )}     />
                 
     </View>
               
    )
        
       

    }




        
    
