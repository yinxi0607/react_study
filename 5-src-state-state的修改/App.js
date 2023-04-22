import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'lakers',
            count :1
        }
    }

    setName = () => {
        // react 中修改state必须通过setState
        // todo 写法一
        // this.setState({
        //     name: 'fox'
        // })

        // todo 写法二
        this.setState((preState) => {
            // preState就是旧state
            console.log(preState)
            return {
                name: 'fox'
            }
        })
    }

    add = () => {
        this.setState(preState=>{
            return {
                count:preState.count+1
            }
        })
    }

    render() {
        const {name,count} = this.state;
        return (
            <div>
                <button onClick={this.setName}> 修改name</button>
                <p> {name}</p>
                <button onClick={ this.add}>+</button>
                <p> {count}</p>
            </div>
        )
    }
}

