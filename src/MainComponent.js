// import React, { useEffect } from "react";
// import {View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image, Alert} from 'react-native';
// import { useDispatch, useSelector } from "react-redux";
// import Counter from "./Counter";
// // import { INCREMENT, DECREMENT } from "./constants";
// import { increment, decrement, fetchData } from "./actions";

// const MainComponent = () => {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.thunkR.data)
//   const error = useSelector((state) => state.thunkR.error)
//   const isLoading = useSelector(state=> state.thunkR.isLoading)

//   // useEffect(()=> {dispatch(fetchData())}, [dispatch])  

//   const renderItem = ({ item }) => { 
//     return (<View style={{ marginBottom: 30, alignItems:"center"}}>
//       <Text>Title: {item.title}</Text>
//       <Text>Price: $ {item.price}</Text>
//       <Image source={{uri: item.image}}
//       style={{height:40, width:40, borderRadius:20}} />
//     </View>
//     )
//   }
  
  
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

//             <TouchableOpacity style={{borderWidth:2, padding:5, marginVertical:10}}
//             onPress={(e)=> dispatch(fetchData())}
//             >
//               <Text>
//                 Fetch data
//               </Text>
//             </TouchableOpacity>

//             {isLoading ? (
//         // <Text>Loading...</Text>
//         <ActivityIndicator size="large" color="pink" />

//       ) : error ? (
//         <Text>Error: {error}</Text>
//       ) : (
//         <FlatList
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id.toString()}

//         />
//       )}
      
       
//       </View>
   
//   );
// };

// export default MainComponent;