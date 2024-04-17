import {View} from '@tarojs/components'
import Taro from "@tarojs/taro";
import {AtSearchBar, AtTabBar} from "taro-ui";
import './index.scss'
import {Component} from "react";


class Index extends Component<any, any> {

    switchTab(value) {
        if (value !== 1) return;
        Taro.reLaunch({
            url: "/pages/my/index"
        });
    }

    render() {
        return (
            <View className='container'>
                <AtSearchBar
                    actionName= '搜索'
                    value={""}
                    onChange={() => {
                    }}>
                </AtSearchBar>
                <AtTabBar fixed
                          selectedColor="#d43c33"
                          tabList={[
                              {title: "求卦", iconPrefixClass: "fa", iconType: "feed"},
                              {title: "查卦", iconPrefixClass: "fa", iconType: "music"},
                              {title: "个人", iconPrefixClass: "fa", iconType: "music"}
                          ]}
                          current={0} onClick={this.switchTab.bind(this)}>
                </AtTabBar>
            </View>
        )
    }
}

export default Index;


