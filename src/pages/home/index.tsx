import './index.scss'
import {View} from "@tarojs/components";
import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/icon.scss";
import { AtSearchBar } from 'taro-ui'
import {CommonEvent} from "@tarojs/components/types/common";
import {useState} from "react";
import {TrigramWrapper} from "@/components/HexagramWrapper";
import {useLoad} from "@tarojs/taro";
import {DivinatoryService} from "@/services/divinatory";

export function Home() {

    const [searchValue, setSearchValue] = useState<string>('')

    const [trigrams, setTrigrams] = useState<Array<any>>([])

    const search = (value: string, event: CommonEvent) => {
        console.log(event)
        setSearchValue(value)
    }

    useLoad(async () => {
        console.log('load')
        const trigrams:Array<any> = await new DivinatoryService().readPure()
        // trigrams.sort((a, b) => a.seq - b.seq)
        console.log(trigrams)
        setTrigrams(trigrams)
    })

    return (
        <View className='home-container'>
            <AtSearchBar
                inputType='text'
                value={ searchValue }
                onChange={search}
            />
            <View className='hexagrams-container'>
                { trigrams.map(item =>
                    <TrigramWrapper key={item.id} hexagrams={item.hexagrams}  text={item.name} />
                ) }
            </View>
        </View>
    )

}