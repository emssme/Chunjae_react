import React, {useState} from 'react'

const Test0 = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage("안녕하세요");
    const onClickLeave = () => setMessage("바이바이");
    const [color, setColor] = useState('black');
  return (
    <div className='App'>
      <hr/>
      <button onClick={onClickEnter}>입실</button>
      <button onClick={onClickLeave}>퇴실</button>
      <hr/>
      <h1 style={{ color }}>{message}</h1>
      <hr/>
      <button onClick={()=> setColor("darkgreen")}>다크그린</button>
      <button onClick={()=> setColor("gray")}>그레이</button>
      <button onClick={()=> setColor("coral")}>코랄</button>
    </div>
  )
}

export default Test0