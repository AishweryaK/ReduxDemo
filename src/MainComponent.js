// import React from "react";
// import {View, Text, TouchableOpacity} from 'react-native';
// import { useDispatch } from "react-redux";
// import Counter from "./Counter";
// // import { INCREMENT, DECREMENT } from "./constants";
// import { increment, decrement } from "./actions";

// const MainComponent = () => {
//   const dispatch = useDispatch();
  
//   return (
   
   
//       <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
//         <Text >Counter App</Text>
       
//           <TouchableOpacity style={{borderWidth:2, padding:5, paddingHorizontal:12, marginVertical:10}}
//           onPress={(event)=> dispatch(increment())} >
//             <Text>Increment</Text>
//             </TouchableOpacity>
//            <Counter />
//           <TouchableOpacity  style={{borderWidth:2, padding:5, marginVertical:10}}
//           onPress={(event)=> dispatch(decrement())}>
//             <Text> Decrement </Text>
//             </TouchableOpacity>
      
       
//       </View>
   
//   );
// };

// export default MainComponent;