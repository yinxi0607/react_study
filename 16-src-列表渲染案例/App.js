import React, {Component} from 'react';

class App extends Component {
    state = {
        list: [],
        flag: false
    }
    getData = () => {
        // todo发送数据请求
        this.setState({
            flag: true
        })
        fetch('http://127.0.0.1:8080/api/category')
            .then(data => data.json()).then(res => {
                console.log('res',res)
                this.setState({
                    list: res.data.data,
                    flag: false
                })
        }).catch(error => Promise.reject(error))
    }
    render() {
        const {list,flag} = this.state;

        return (
            <div>
                数据请求-赋值-列表渲染-loading优化<hr/>
                <button onClick={this.getData}> 发送数据请求，渲染页面 </button>
                {flag && <h1>Loading</h1>}
                <ul>
                    {
                        list.map(item => <li key={item.cid}> {item.name}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default App;