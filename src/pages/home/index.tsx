import './index.scss'
import {View} from "@tarojs/components";
import {Gua} from "@/components/gua/gua.component";


export function Home() {
    return (
        <View className='home-container'>
            <Gua index={ 3 } />
            {/*<Gua index={ 4 } />*/}
            {/*<Gua index={ 5 } />*/}
            {/*<Gua index={ 6 } />*/}
            {/*<Gua index={ 7 } />*/}
            {/*<Gua index={ 8 } />*/}
        </View>
    )
}