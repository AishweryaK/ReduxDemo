import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector} from "react-redux";
import CounterRTK from "./CounterRTK";
import { increase, decrease} from "./reducerSliceRTK";
import { GET_USERS_FETCH } from "./actionsRTK";


const MainComponentRTK = () => {
  const dispatch = useDispatch();
const userAPI = useSelector((state)=> state.userR)
console.log(userAPI)
  return (
   
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <View>
        <Text >Counter App</Text>
       
          <TouchableOpacity style={{borderWidth:2, padding:5, paddingHorizontal:12, marginVertical:10}}
           onPress={(e)=> dispatch(increase())}
           >
            <Text>Increment</Text>
            </TouchableOpacity>
           <CounterRTK />
          <TouchableOpacity  style={{borderWidth:2, padding:5, marginVertical:10}}
          onPress={(e)=> dispatch(decrease())}>
            <Text> Decrement </Text>
            </TouchableOpacity>

            <TouchableOpacity  style={{borderWidth:2, padding:5, marginVertical:10}}
          onPress={(e)=> dispatch(GET_USERS_FETCH())}>
            <Text> Fetch </Text>
            </TouchableOpacity>
      
       
      </View>
      </View>
  );
};

export default MainComponentRTK;