//구조 분할(분리) => 비구조 할당
const Test6 = (props) => {
    const {irum, age, addr} = props; //객체구조분할
    //const [irum, age, addr] = props;  //배열구조분할
  return (
    <div className="App">
        <h2>저의 이름은 {props.irum}입니다.</h2>
        <h2>나이는 {props.age}세 입니다.</h2>
        <h2>사는 곳은 {props.addr}입니다.</h2>
    </div>
  )
}

export default Test6