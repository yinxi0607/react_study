import React, {Component} from 'react';

class App extends Component {
    state = {
        movies: null,
        flag: false
    }
    getData = () =>{
        this.setState({
            flag:true
        })
        fetch('/ajax/movieOnInfolist?token=&' +
            'optimus_uuid=A894438019C611EB875C6BA4A34E53D824D58CC33E6143CBBEF9C5952036A8658&' +
            'optimus_risk_level=71&optimus_code=10')
            .then(data => data.json())
            .then(res => {
                console.log('res',res)
                this.setState({
                    movies: res.movieList,
                    flag: false
                })
            })
            .catch(error => Promise.reject(error))
    }
    render() {
        const {movies,flag} = this.state;
        return (
            <div>
                反向代理 + 数据请求 + loading + 数据判断 + 数据渲染 <hr/>
                <button onClick={this.getData}> 发送数据请求 </button>
                {
                    flag && <div> Loading </div>
                }
                <ul>
                    {/*map的使用前提是movies必须是一个数组
                        经验：只要写列表渲染，一定记得要判断数据是否为数组，
                        movies && movies.map 易错点
                    */}
                    {
                        movies && movies.map(item => <li key={item.id}> {item.nm} </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default App;