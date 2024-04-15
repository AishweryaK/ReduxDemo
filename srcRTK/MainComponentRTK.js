// import React from "react";
// import {View, Text, TouchableOpacity} from 'react-native';
// import { useDispatch, useSelector} from "react-redux";
// import CounterRTK from "./CounterRTK";
// import { increase, decrease} from "./reducerSliceRTK";


// const MainComponentRTK = () => {
//   const dispatch = useDispatch();
// //   const count = useSelector(state=>{console.log('Redux State:', state);
// //     return state.counter.count;})
  
//   console.log('lkdfnskcn')
//   return (
   
//       <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
//           <View>
//         <Text >Counter App</Text>
       
//           <TouchableOpacity style={{borderWidth:2, padding:5, paddingHorizontal:12, marginVertical:10}}
//            onPress={(e)=> dispatch(increase())}
//            >
//             <Text>Increment</Text>
//             </TouchableOpacity>
//            <CounterRTK date={new Date().getTime()}/>
//            {/* <View>
//            <Text> Count : {count}
//             </Text>
//         </View> */}
//           <TouchableOpacity  style={{borderWidth:2, padding:5, marginVertical:10}}
//           onPress={(e)=> dispatch(decrease())}>
//             <Text> Decrement </Text>
//             </TouchableOpacity>
      
       
//       </View>
//       </View>
//   );
// };

// export default MainComponentRTK;