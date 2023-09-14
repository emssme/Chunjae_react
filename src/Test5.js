//구조(props) 할당
const Test5 = (props) => {
  return (
    <div className="App">
        <h2>저의 이름은 {props.irum}입니다.</h2>
        <h2>나이는 {props.age}세 입니다.</h2>
        <h2>사는 곳은 {props.addr}입니다.</h2>
    </div>
  )
}

Test5.defaultProps = {
    irum : '김보경',
    age : '25',
    addr : '가산동'
}

export default Test5