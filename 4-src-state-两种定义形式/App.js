import logo from './logo.svg';
import './App.css';
import React,{Component} from "react";

export default class App extends Component{
    // constructor() {
    //     super();
    //     this.state = {
    //         name: 'lakers'
    //     }
    // }

    // todo state 定义方法二：class中直接定义
    state = {
        name: 'fox'
    }

    render() {
        // console.log('this',this)
        const {name} = this.state;
        return (
            <div>
                <h1>hello {name}</h1>
            </div>
        )
    }
}

