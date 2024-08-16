import { View} from "@tarojs/components";
import "./index.scss"


export function Line(props) {

    return props.type == 1 ?
        <View className="line"></View> :
        <View className="line-wrapper">
            <View className="line"></View>
            <View className="line"></View>
        </View>
    // return <CustomWrapper>
    //     <View className="Line">1</View>
    //     {props.type == 0 && <View className="Line">0</View>}
    // </CustomWrapper>
}