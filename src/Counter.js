import React from "react";
import { useSelector } from "react-redux";
import { Text, View } from "react-native";

const Counter = () => {
    // const count = useSelector(state=>state);
    const count = useSelector(state=>state.red.count);
    // const hi =  useSelector(state=>state.hello.hi)
    return (
        <View>
           <Text> Count : {count}
            </Text>
            {/* <Text> Greeting : {hi}
            </Text>  */}
        </View>
    )
}

export default Counter;