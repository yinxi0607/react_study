import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";
import {Component} from "react";

// function App() {
//   return (
//     <div className="App">
//       通过属性绑定的形式给hello组件传递数据
//       <Hello name="lakers" age={ 18 }/>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


export default class App extends Component{
    // todo 类组件通过一个关键字 static defaultProps = {} 来设置默认属性
    static defaultProps = {
        color: 'yellow'
    }
    render(){
        const {color} = this.props
        return (
            <div>
                <h1>App</h1>
                {/*<Hello color={color}/>*/}
                { color }
            </div>
        )
    }
}