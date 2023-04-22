import React, {Component} from 'react';

class App extends Component {

    state ={
        flag: true
    }

    setFlag = () => {
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        const {flag} = this.state;
        return (
            <div>
                <h1> 条件渲染</h1>
                1、短路原则<br/>
                2、三目运算符<br/>
                <button onClick={this.setFlag}>Click</button>
                {
                    // flag && <p> 你好 </p>
                    flag ? <p> 你好 </p> :''
                }

            </div>
        );
    }
}

export default App;