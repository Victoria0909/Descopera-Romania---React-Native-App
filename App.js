import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {MainRouter} from './routers/MainRouter'


const App = () => {
  return (
    
    
    <NavigationContainer>
      
      <MainRouter />
    </NavigationContainer>
  );
};

export default App;
