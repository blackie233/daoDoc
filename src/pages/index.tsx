import {View} from '@tarojs/components'
// import Taro from "@tarojs/taro";
import { AtTabBar} from "taro-ui";
import './index.scss'
import {Component} from "react";
import {BrowserRouter, HashRouter, Route, Routes,} from "react-router-dom";
import Home from "@/pages/home";
import Detail from "@/pages/detail";


class Index extends Component<any, any> {

    // 可以使用所有的 React 生命周期方法
    componentDidMount() {}

    // onLoad
    onLoad() {}

    // onReady
    onReady() {}

    // 对应 onShow
    componentDidShow() {}

    // 对应 onHide
    componentDidHide() {}

    // 对应 onPullDownRefresh，除了 componentDidShow/componentDidHide 之外，
    // 所有页面生命周期函数名都与小程序相对应
    onPullDownRefresh() {}

    switchTab(value) {
        if (value !== 1) return;
        // Taro.reLaunch({
        //     url: "/pages/my/index"
        // });
    }

    handleScroll(e) {
        console.log(e)
    }

    onShareAppMessage() {
        return {
            title: '分享标题',
            path: '/pages/index/index'
        };
    }


    render() {
        const MyRouter = process.env.TARO_ENV === 'h5' ? HashRouter : BrowserRouter

        return (
            <MyRouter basename="/pages/index">
                <View className='container'>
                    <Routes>
                        <Route index element={<Home />}></Route>
                        <Route path="detail" element={<Detail />}></Route>
                    </Routes>
                    {/*{ this.props.children }*/}


                    <AtTabBar fixed
                              selectedColor="#d43c33"
                              tabList={[
                                  {title: "求卦", iconPrefixClass: "dd", iconType: "xuqiu"},
                                  {title: "查卦", iconPrefixClass: "dd", iconType: "bagua"},
                                  {title: "个人", iconPrefixClass: "dd", iconType: "geren"}
                              ]}
                              current={0} onClick={this.switchTab.bind(this)}>
                    </AtTabBar>
                </View>

            </MyRouter>
        )
    }
}

export default Index;


