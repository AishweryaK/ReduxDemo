import React from "react";
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import MainComponent from "./src/MainComponent";
// import MainComponentRTK from "./srcRTK/MainComponentRTK";

const App = () => {
 
  
  return (
      <SafeAreaView style= {{ flex:1}}>
      <MainComponent />
      {/* <MainComponentRTK /> */}
      </SafeAreaView>
   
  );
};

export default App;