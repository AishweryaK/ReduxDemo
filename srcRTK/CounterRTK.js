import React, {memo} from "react";
import { useSelector } from "react-redux";
import { Text, View } from "react-native";

const CounterRTK = ({date}) => {
    const count = useSelector(state=>{console.log(date,'Redux State:', state);
    return state.counter.count;})
    return (
        <View>
           <Text> Count : {count}
            </Text>
        </View>
    )
}

export default memo(CounterRTK);