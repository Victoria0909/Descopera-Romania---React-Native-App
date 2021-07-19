import React from 'react'
import { StyleSheet} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { Dimensions } from 'react-native';

export default function Maps(props) {
  return (
    // <MapView style={styles.container}>
    <MapView style={styles.map} 
      region={{
        latitude : 45.4332715547623,
        longitude :  28.044254376151,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
        
      }}
      >
    <Marker 
        coordinate = {{
          latitude : 45.4332715547623,
          longitude :  28.044254376151,
        }}

         style={styles.image}
         title='current location'
         description='this is your current location'
      >
         {/* <Callout tooltip> 
          <View >
            <View style={styles.bubble}>

            </View>
          </View>
         </Callout> */}
    </Marker>    
    </MapView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
   
  },
  image :{
        width: '10%',
        height: 10,
        
  }

});