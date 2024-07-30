import { View} from "@tarojs/components";
import "./line.component.scss"


export function Line(props) {
    return props.type == 1 ?
        <View className="line"></View> :
        <View className="line-wrapper">
            <View className="line" style='margin-right: 4px'></View>
            <View className="line"></View>
        </View>
    // return <CustomWrapper>
    //     <View className="line">1</View>
    //     {props.type == 0 && <View className="line">0</View>}
    // </CustomWrapper>
}