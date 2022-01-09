import React,{useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'


export default function Add() {
  let [count, setCount] = useState(0)

  let myRef = useRef('跨殺小')

  const unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  
  const show = () => {
    alert(myRef.current.value)
  }
  
  useEffect(() => {
    console.log('go');
    document.title = `${count} times`;
    
    let timer = setInterval(() => {
      setCount(count = count + 1)
    }, 1000)

    return () => {
      console.log('unmount')
      clearInterval(timer)
    };
  }, [])
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => unmount()}>卸載元件</button>
    
    <input type="number" ref={myRef}/>
    <button onClick={() => show()}>彈出輸入數字</button>
    </>
  )
}
