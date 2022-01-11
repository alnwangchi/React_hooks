import React,{useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'


export default function Add() {
  let [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  let myRef = useRef()
  let myRef2 = useRef()
  let count2 = useRef(0) // 紀錄前一次值
  let renderTime = useRef(0) // 紀錄 render 次數

  const unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  
  const show = () => {
    alert(myRef.current.value || '跨殺小')
  }

  const inputFocus = () => {
    myRef2.current.focus();
  }

  useEffect(() => {
    renderTime.current = renderTime.current + 1
  })

  useEffect(() => {
    setInterval(() => {
      count2.current = count2.current + 1
    }, 1500)
  }, [])
  
  useEffect(() => {
    console.log('go');
    // document.title = `${count} times`;
    
    let timer = setInterval(() => {
      console.log('123');
      setCount(() => count = count + 1)
    }, 1000)

    return () => {
      console.log('unmount')
      clearInterval(timer)
    };
  }, [])
  return (
    <>
    <h1>{count}</h1>
    <h2>{count2.current}</h2>
    <button onClick={() => unmount()}>卸載元件</button>
    <input type="number" ref={myRef}/>
    <button onClick={() => show()}>彈出輸入數字</button>
    <br />
    <input type="text" ref={myRef2}/>
    <button onClick={() => inputFocus()}>Let input focus</button>
    <br />
    <br />
    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
    <h3>msg: {message}</h3>
    <h2>render {renderTime.current} times</h2>

    </>
  )
}
