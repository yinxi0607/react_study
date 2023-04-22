import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'lakers'
        }
    }

    setName = () => {
        //发现一个问题：this.state.name是旧值，不是新值，虽然我们在她的前面修改了state
        // 分析：这里的setState是异步的，所以拿不到新值
        // 解决：setState的第二个参数，是一个回调函数，可以拿到新值
        this.setState({
            name: 'fox'
        },() => {
            document.title = this.state.name
        })

        /*
        setState 是同步的还是异步的？
        1、合成事件中的setState是异步的
        2、原生事件中的setState是同步的
        */
    }


    render() {
        const {name} = this.state;
        return (
            <div>
                <button onClick={this.setName}> 修改name</button>
                <p> {name}</p>
            </div>
        )
    }
}

