import React from "react";
import { useSelector } from "react-redux";
import { Text, View } from "react-native";

const Counter = () => {
    const count = useSelector(state=>state.count);
    return (
        <View>
           <Text> Count : {count}
            </Text> 
        </View>
    )
}

export default Counter;