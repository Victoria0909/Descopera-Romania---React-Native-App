import React from 'react';
import * as RN from 'react-native';
import Maps from './Maps'


const Details = ({route, navigation}) => {
    const { item } = route.params;
    return (
        <RN.View style={styles.view}>
            <RN.View style={styles.view2}>
                <RN.TouchableOpacity>
                    <RN.StatusBar barStyle={'light-content' } />
                        <Maps/>
                            <RN.Text style={styles.text}
                            >{item.title} {' '}</RN.Text>
                </RN.TouchableOpacity>

            </RN.View>
            <RN.View style={styles.view3}>
                {/* <RN.Text style={styles.text2}>Pe urmele domnesti</RN.Text> */}
                {/* <RN.Text style={styles.text3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</RN.Text> */}
            </RN.View>
        </RN.View>
    )
};

const styles = RN.StyleSheet.create({
    view : {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    // view2 :{
    //     flex:1, backgroundColor: '#ddbea9'
    // },
    text :{
        textAlign: 'center', 
        fontWeight: 'bold', 
        padding:20, fontSize:20, 
        textDecorationLine: 'underline'},
    view3 :{
        flex:1, 
        backgroundColor: '#caf0f8'
        },
    text2 : {
        fontSize:20, 
        textAlign: 'center', 
        color: '#3f37c9', 
        fontWeight: 'bold', 
        padding:30
    },
    text3 : {
        fontSize:15, 
        textAlign: 'center', 
        color: '#3f37c9'
    }

})

export default Details;