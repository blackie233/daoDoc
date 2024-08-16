import './index.scss'
import {View, Text} from "@tarojs/components";
import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/icon.scss";
import { AtSearchBar } from 'taro-ui'
import {CommonEvent} from "@tarojs/components/types/common";
import {useState} from "react";
import {TrigramWrapper} from "@/components/HexagramWrapper";
import Taro, {useLoad} from "@tarojs/taro";
import service from "@/services/divinatory";
import {TaiChi} from "@/components/TaiChi";

export default function Home() {

    const [searchValue, setSearchValue] = useState<string>('')

    const [trigrams, setTrigrams] = useState<Array<any>>([])
    const [hexagrams, setHexagrams] = useState<Array<any>>([])

    const search = (value: string, event: CommonEvent) => {
        console.log(event)
        setSearchValue(value)
    }

    const toDetail = () => {
        Taro.redirectTo({
           url: 'pages/index/detail'
        })
    }

    useLoad(async () => {
        console.log('loadhome')
        const trigrams:Array<any> = await service.readPure()
        // trigrams.sort((a, b) => a.seq - b.seq)
        trigrams.splice(4, 0 , { id: 0, hexagrams: '', name: '' })
        console.log(trigrams)
        setTrigrams(trigrams)

        const hexagrams: Array<any> = await service.load()
        setHexagrams(hexagrams)
    })

    return (
            <View className='home-container'>
            <AtSearchBar
                inputType='text'
                value={ searchValue }
                onChange={search}
            />
            <View className='hexagrams-container'>
                <TrigramShapes trigrams={trigrams}></TrigramShapes>
            </View>

            <View className="hexagrams-items">
                { hexagrams.map(item =>
                    <HexCard onClick={toDetail} key={item.id} data={item} />
                ) }
            </View>
        </View>
    )

}

function TrigramShapes(prop) {
    const [isTrigramDetail, setIsTrigramDetail] = useState<boolean>(false)

    const onClick = () => {
        console.log(11111)
        setIsTrigramDetail(true)
    }

    if(isTrigramDetail) {
        return  <View className='trigram-detail'>  </View>
    } else return <>
        <View className='hexagrams-items'>
            {prop.trigrams.map(item => <TrigramWrapper onClick={onClick} key={item.id} hexagrams={item.hexagrams} text={item.name}/>)}
        </View>
        <TaiChi></TaiChi>
    </>

}

function HexCard({ data, onClick }) {

    return <View onClick={ onClick } className='card-wrapper'>
        <Text className="card-detail">{ data.id }</Text>
        <View className="card-title">
            <View>{ data.name }</View>
            <Text className='btn-detail'>查看详情</Text>
        </View>
    </View>
}