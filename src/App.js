import React, {Component} from 'react';

class App extends Component {
    getData = () =>{
        fetch('https://m.maoyan.com/ajax/movieOnInfolist?token=&' +
            'optimus_uuid=A894438019C611EB875C6BA4A34E53D824D58CC33E6143CBBEF9C5952036A8658&' +
            'optimus_risk_level=71&optimus_code=10')
            .then(data => data.json())
            .then(res => {
                console.log('res',res)
            })
            .catch(error => Promise.reject(error))
    }
    render() {
        return (
            <div>
                <button onClick={this.getData}> 发送数据请求 </button>
            </div>
        );
    }
}

export default App;