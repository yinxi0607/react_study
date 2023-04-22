import './App.css';
import React, {Component} from "react";

export default class App extends Component {
    state = {
        num: 0
    }

    add = () => {
        /*
        * 说明：下面的for循环模拟了1000次的setState的操作
        * 分析：setState ---> data change ---> 虚拟的DOM要重新生成--->diff算法比对新旧虚拟的dom得到patch补丁对象，
        * 然后在重新将补丁渲染为真实的DOM
        * react是如何来优化这个行为的呢？
        *   1、设置一个计划时间
        *   2、在这个计划时间范围内，所有的setState操作全部放入一个队列中，统一进行处理，也就是所谓的合并setState
        *   3、达到这个计划时间了，就执行虚拟dom生成，diff算法，patch补丁，渲染真实的DOM
        *
        *  !!!经验
        * 1、react短时间内大量的setState虽然react内置了优化性能的行为，但是还是会影响性能
        * 2、减少setState操作
        * */
        for(let i = 0; i < 1000; i++) {
            this.setState({num: i})
        }
    }

    render() {
        return (
            <div>
               setState 内置有优化性能的行为
                <hr/>
                <button onClick={ this.add }>+1</button>
                <span>{this.state.num}</span>
            </div>
        )
    }
}

