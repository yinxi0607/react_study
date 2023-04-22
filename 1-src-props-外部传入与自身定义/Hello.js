import React, { Component } from 'react';
//
// export default class Hello extends Component{
//     render() {
//         console.log(this)
//         return (
//             <div>
//                 {/*react 语法使用的是单括号语法*/}
//                 Hello, { this.props.name } - { this.props.age }
//             </div>
//         )
//     }
// }

// export default function Hello( {name,age} ){
//     return (
//         <div>
//             react 函数传输
//             Hello, { name } - { age }
//         </div>
//     )
// }


export default class Hello extends Component{
    render() {
        console.log(this)
        // 解构写法
        const {name,age} = this.props
        return (
            <div>
                {/*react 语法使用的是单括号语法*/}
                Hello, { name } - { age }
            </div>
        )
    }
}