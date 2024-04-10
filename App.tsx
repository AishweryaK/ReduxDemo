import React from "react";
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import MainComponent from "./src/MainComponent";

const App = () => {
 
  
  return (
      <SafeAreaView style= {{ flex:1}}>
      <MainComponent />
      </SafeAreaView>
   
  );
};

export default App;