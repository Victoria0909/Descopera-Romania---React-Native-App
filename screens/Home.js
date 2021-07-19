import 'react-native-gesture-handler';
import React from 'react';
import * as RN from 'react-native';


import ListItem from '../components/ListItem'

import DATA from '../components/Data'
// import Maps from './Maps';

const Home = ({navigation}) => {

 onItemPress = (item) => {
   alert(item)
 }
  return (
    <RN.SafeAreaView style={{backgroundColor: '#98C1D8', flex: 1}}>
       <RN.StatusBar barStyle={'light-content' } />
      <RN.FlatList
        data={DATA}
        renderItem={(item) => <ListItem {...item} navigation={navigation}/>}
        keyExtractor={item => item.id}
      />
      {/* <Maps/> */}
    </RN.SafeAreaView>
  );
};

export default Home;