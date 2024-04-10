import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { useDispatch } from "react-redux";
import Counter from "./Counter";
import { INCREMENT, DECREMENT } from "./constants";

const MainComponent = () => {
  const dispatch = useDispatch();
  
  return (
   
   
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text >Counter App</Text>
       
          <TouchableOpacity onPress={(event)=> dispatch({type: INCREMENT})} >
            <Text>Increment</Text>
            </TouchableOpacity>
           <Counter />
          <TouchableOpacity  onPress={(event)=> dispatch({type: DECREMENT})}>
            <Text> Decrement </Text>
            </TouchableOpacity>
      
       
      </View>
   
  );
};

export default MainComponent;