import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";
import {Component} from "react";

function App() {
  return (
    <div className="App">
      通过属性绑定的形式给hello组件传递数据
      <Hello name="lakers" age={ 18 } money={ 5000 } phone={1293858}/>
    </div>
  );
}

export default App;


