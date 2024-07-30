import {View} from '@tarojs/components'
// import Taro from "@tarojs/taro";
import { AtTabBar} from "taro-ui";
import './index.scss'
import {Component} from "react";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {Home} from "@/pages/home";


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

    render() {
        return (
            <BrowserRouter >
                <View className='container'>
                    <Routes>
                        {/*<Route path="pages/index/index" element={<Index />}>*/}
                        <Route index  element={<Home />}></Route>
                        {/*<Route path="pages/index/index"  element={<Home />}></Route>*/}
                        {/*<Route index  element={<Home />}></Route>*/}
                        {/*</Route>*/}
                    </Routes>
                    { this.props.children }
                    {/*<PageMeta*/}
                    {/*    onScroll={this.handleScroll}*/}
                    {/*>*/}
                    {/*    <NavigationBar>*/}

                    {/*    </NavigationBar>*/}
                    {/*</PageMeta>*/}
                    {/*<AtSearchBar*/}
                    {/*    actionName= '搜索'*/}
                    {/*    value={""}*/}
                    {/*    onChange={() => {*/}
                    {/*    }}>*/}
                    {/*</AtSearchBar>*/}

                    {/*<View>*/}
                    {/*    <Link to="/pages/home">首页</Link>*/}
                    {/*</View>*/}

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

            </BrowserRouter>
        )
    }
}

export default Index;


