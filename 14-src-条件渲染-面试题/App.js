import React, {Component} from 'react';

class App extends Component {
    state = {
        flag: false,
    }
    setFlag = () => {
        this.setState({
            flag: !this.state.flag,
        },() => {
            setTimeout(()=>{
                this.setState({
                    flag: !this.state.flag
                })
            },3000)
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                flag: !this.state.flag,
            });
        },3000)
    }

    render() {
        const {flag} = this.state;
        if (!flag){
            return (
                <div>
                    <h1>Loading</h1>
                </div>
            );
        }
        return (
            <div>
                <button onClick={this.setFlag}> 修改flag</button>
                内容显示
            </div>
        );
    }
}

export default App;