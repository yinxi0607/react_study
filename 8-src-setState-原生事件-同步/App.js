import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

export default class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         name: 'lakers'
    //     }
    // }
    state = {
        name: 'lakers'
    }

    componentDidMount() {
        const btn = document.querySelector('button');
        const _this = this;
        btn.addEventListener('click', function () {
            _this.setState({
                name: 'fox'
            })
            document.title = _this.state.name;
        })
    }


    render() {
        const {name} = this.state;
        return (
            <div>
                <button> 修改name</button>
                <p> {name}</p>
            </div>
        )
    }
}

