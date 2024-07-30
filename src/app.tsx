import  {Component} from 'react'
import './app.scss'
import './assets/dd/iconfont.css'

class App extends Component {

  useDidHide() {

  }

  useDidShow() {

  }

  useLaunch(options){
    console.log('App launched.')

    console.log(options)
  }

  // render(container, element) {
  //   console.log(container, element)
  //   return (
  //
  //   )
  // }
  // children 是将要会渲染的页面
  render() {
    return (
        this.props["children"]
    )
  }
}

export default App
