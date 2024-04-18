import React from "react";
import { useSelector } from "react-redux";
import { Text, View } from "react-native";

const CounterRTK = () => {
    const count = useSelector(state => state.counter.count)
    console.log(count)
    console.log(count)
    return (
        <View>
           <Text> Count : {count}
            </Text>
        </View>
    )
}

export default CounterRTK;