import {View} from "@tarojs/components";
import {Line} from "@/components/line/line.component";
import './gua.component.scss'

interface IGuaIn {
    index: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
    width?: number,
    height?: number
}

type Index = IGuaIn['index'];

const list:{ [K in Index]: Array<number> } = {
    1: [1, 1, 1],
    2: [0, 1, 1],
    3: [1, 0, 1],
    4: [0, 0, 1],
    5: [1, 1, 0],
    6: [0, 1, 0],
    7: [1, 0, 0],
    8: [0, 0, 0],
}

export function Gua(props: IGuaIn) {

    return (
        <View style={{ width: props.width || '50px', height: props.height || '44px' }}
              className='gua-wrapper'>
            { list[props.index].map( item =>
                <Line type={ item } />
            ) }
        </View>
    )
}