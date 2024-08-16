import {View} from "@tarojs/components";
import {Line} from "@/components/Line";
import './index.scss'
import {useEffect, useState} from "react";
import {useLoad} from "@tarojs/taro";

export interface IHexagramIn {
    width?: string,
    height?: string,
    hexagrams: Array<number>,
    [key:string]:any
}


export function Hexagram(props: IHexagramIn) {

    const [lines, setLines] = useState<Array<number>>([1,1,1])

    useLoad(() => {
        // console.log(props.hexagrams)
        // setLines(props.hexagrams)
    })

    useEffect(() => {
        setLines(props.hexagrams)
    }, [props.hexagrams])

    return (
        <View style={{ width: props.width || '', height: props.height || '100%' }}
              className='hexagram-content'>
            <View className='shape'>
                { lines.map( (item, index) =>
                    <Line key={index} type={ item } />
                ) }
            </View>
            <View className='text'>{ props.children }</View>

        </View>
    )
}