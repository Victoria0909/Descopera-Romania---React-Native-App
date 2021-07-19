import React from 'react'
import * as RN from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ListItem = (props) => {
    console.log(props)
const {image, title, duration, persons, city} = props.item;
    return (
        <RN.View style={{paddingHorizontal: 15, paddingVertical: 2}}>
        <RN.View>
        <RN.Image 
          style={styles.image}
          source={image}
        />
        <RN.View style={styles.absContainer}>
          <RN.Text style={styles.title}> {title} </RN.Text>
            
            {/* Botom section */}
            <RN.View style={{
                justifyContent: 'space-between', 
                flexDirection: 'row'
                }}>
            <RN.View style={{  flexDirection: 'row' }}>
                <RN.Text style={styles.details}> { duration }
                <Ionicons name="time-outline" size={16} color="white"/>
                
                </RN.Text>
                <RN.Text style={styles.details}> {persons} 
                    <AntDesign name="user" size={16} color="white"/>
                </RN.Text>
                <RN.Text style={styles.details}> {' city '} 
                <MaterialCommunityIcons name="city-variant-outline" size={16} color="white"/>
                </RN.Text>
            </RN.View>
            <RN.View style={styles.button}>
                <RN.Text 
                    style={{color: 'white', fontSize: 12}}
                    onPress={() => props.navigation.navigate({
                        name:'Details', 
                        params: {item: props.item}})
                    }>
                  Apasa aici
                </RN.Text>
              </RN.View>
        </RN.View>
        </RN.View>

      </RN.View>
      </RN.View>
    )

};
const styles = RN.StyleSheet.create({
    image:{
        width: '100%',
        height: 120,
        borderRadius: 10,
        resizeMode: 'cover'
        
    },
    absContainer: {
        position: 'absolute',
        padding: 7,
        justifyContent: 'space-between',
        height: 120,
        width: '100%'
    },
    title: {
        color: 'white', 
        fontSize: 20, 
        fontWeight: '600',
        padding: 5,
        
    },
    details: {
        color: 'white', 
        fontSize: 15,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: '#DB7322',
        width: 75,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 1
    },
    icon :{
    //    spaceBetween :15 
       
    }
})

export default ListItem;
