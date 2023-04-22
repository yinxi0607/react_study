import './App.css';
import React, {Component} from "react";

export default class App extends Component {

    static = {
        count: 0
    }
    // this.setState({
    //     count: this.state.count + 1
    // }

    render() {
    const { count } = this.state;
        return (
            <div>
                render 函数中不能直接调用 setState <hr/>
                报错： 栈溢出（死循环）<hr/>
                原因： render 函数本身就是用于解析this.stat和this.props的，解析时再修改，机器矛盾而死循环 <hr/>
                <p> { count }</p>
            </div>
        )
    }
}

