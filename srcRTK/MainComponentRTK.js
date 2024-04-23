import React, { useRef, useState } from "react";
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import { useDispatch, useSelector} from "react-redux";
import CounterRTK from "./CounterRTK";
import { increase, decrease} from "./reducerSliceRTK";
import { GET_USERS_FETCH } from "./actionsRTK";
import { setInputValue } from "./InputSliceRTK";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MainComponentRTK = () => {
  const dispatch = useDispatch();
// const userAPI = useSelector((state)=> state.userR)
const [name, setName] = useState("");
// console.log(userAPI)
const userName = useSelector((state)=>state.inputV.inputValue);
const myRef = useRef(false);

const handleInput = (input) => {
  console.log(input);
  setName(input);
  
}
const handleSave = ()=> {
  // AsyncStorage.clear();
  dispatch(setInputValue(name));
  setName("");
  if(userName != "")
  {
  myRef.current= true;
  }
}
console.log(name, "name");
console.log(userName, "what i entered");

  return (
   
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
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

            {/* <TouchableOpacity  style={{borderWidth:2, padding:5, marginVertical:10}}
          onPress={(e)=> dispatch(GET_USERS_FETCH())}>
            <Text> Fetch </Text>
            </TouchableOpacity> */}

            <TextInput onChangeText={handleInput} style={{borderWidth:2, padding:5, marginVertical:10}}
            placeholder="name" value={name}
            ></TextInput>

<TouchableOpacity  style={{borderWidth:2, padding:5, marginVertical:10}}
          onPress={handleSave}>
            <Text> Save </Text>
            </TouchableOpacity>

            {myRef.current && <Text> hello {userName} ! </Text>}
       
      </View>
  );
};

export default MainComponentRTK;