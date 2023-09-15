
import React, {useState} from 'react'

const Test2 = () => {
    const [ form, setForm] = useState({
        username:'',
        message: ''
    });
    const { username, message } = form;     //폼 객체 분리
    //이벤트 기술
    const onChange = (e) => {   
        setTimeout(() => console.log(e), 500)
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(nextForm);
    };
    const onClick = () => {
        alert(`이름 : ${username}, 메시지: ${message}`);
        setForm({
            username:'',
            message: ''
        })
    }

    //Enter key  입력 시 onClick 발생 => 이벤트 떠넘기기
    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            onClick();
        }
    }
  return (
    <div className='App'>
        <h1>복수의 컨트롤 이벤트</h1>
        <input type="text" name="username" placeholder='이름 입력' value={username} onChange={onChange}/>
        <input type='text' name='message' placeholder='메시지 입력' value={message} onChange={onChange} onKeyPress={onKeyPress}/>
        <button onClick={onClick}>확인</button>
    </div>
  )
}

export default Test2