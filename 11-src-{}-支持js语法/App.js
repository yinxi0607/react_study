import React, {Component} from 'react';

class App extends Component {
    state = {
        name: 'fox'
    }
    render() {
        return (
            <div>
                react 中 通过单括号的语法来进行书写<hr/>
                {this.state.name}
                { this.state.name.split('').reverse().join('')}
                {alert('hello world')}
                {console.log('hello world')}
            </div>
        );
    }
}

export default App;