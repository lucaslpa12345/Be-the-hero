import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'
 export default StyleSheet.create ({
 container: { 
     flex: 1, 
     paddingHorizontal: 24,
     paddingTop: Constants.statusBarHeight + 20,
 }, 
  header: { 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'
  }, 
  incident: { 
    padding: 24,
    borderRadius:9,
    backgroundColor: '#fff',
    marginBottom: 18

},
  incidentproperty: { 
      fontSize: 14,
      color: '#41414d',
      fontWeight: 'bold',

  },

  incidentvalue: { 
     marginTop: 9 , 
     fontSize: 15,
     marginBottom: 24, 
     color: '#737380', 
             
  }, 
  contactbox: { 
    padding: 24,
    borderRadius:9,
    backgroundColor: '#fff',
    marginBottom: 18
  }, 

  herotitle: { 
      fontWeight: 'bold', 
      fontSize: 20, 
      color: '#13131a',
      lineHeight: 30
  }, 
  herodescription: { 
      fontSize: 15,
      color: '#737380',
      marginTop: 17,
  }, 

  actions: { 
      marginTop: 17, 
      flexDirection: 'row',
      justifyContent: 'space-between',
  }, 
  action: { 
      backgroundColor: '#e02041',
      borderRadius: 9, 
      height: 50,
      width: '47%',
      justifyContent: 'center',
      alignItems: 'center'
  }, 
  actiontext: { 
      color: '#fff', 
      fontSize: 15,
      fontWeight: 'bold'
  }

})