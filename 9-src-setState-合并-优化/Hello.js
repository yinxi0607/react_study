import React, { Component } from 'react';
import PropTypes from 'prop-types'

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

// 类型检查
Hello.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    customProp (props, propName, componentName) {
        console.log('props',props)
        console.log('propName',propName)
        console.log('componentName',componentName)
        if ( props.money < 3000){
            alert('money is not enough')
        }

        const phoneReg = /^1[3-9]\d{9}$/
        if (!phoneReg.test(props.phone)){
            alert('phone is not valid')
        }
    }
}