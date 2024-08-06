import {View} from "@tarojs/components";
import {Hexagram, IHexagramIn} from "@/components/Hexagram";
import "./index.scss"

export function TrigramWrapper(prop:IHexagramIn) {

    return (
        <View className='hexagram-wrapper'>
            { prop.hexagrams && <Hexagram hexagrams={prop.hexagrams } > { prop.text } </Hexagram> }
        </View>
    )
}