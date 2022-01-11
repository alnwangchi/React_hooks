import React, { Component } from 'react';
import './css/index.css'


const MyContext = React.createContext()
console.log(MyContext);
const {Provider, Consumer} = MyContext
export default class A extends Component {
  state = {
    name: 'Allen'
  }
  render() {
    return (
      <div className='parent'>
        <h1>我是最外層元件 A</h1>
        <h2>我叫{this.state.name}</h2>
        <Provider value={this.state.name}>
          <B />
        </ Provider>
      </div>
    );
  }
}

class B extends Component {

  render() {
    return (
      <div className='children'>
        <h1>我是中間層元件 B</h1>
        <h2>我叫???</h2>
        <C2 />
      </div>
    );
  }
}

// class C extends Component {
//   好像過時了這用法
//   static contextTypes = MyContext
//   render() {
//     console.log(this.context);
//     return (
//       <div className='grand'>
//         <h1>我是孫層元件 C</h1>
//         <h2>我叫???</h2>
//       </div>
//     );
//   }
// }

const C2 = () => {
  return (
    <div className='grand'>
      <h1>我是孫層元件 C</h1>
      <h2>
        <Consumer>
          {value => `我叫${value}`}
        </Consumer>
      </h2>
    </div>
  )
}