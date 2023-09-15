//표현식과 내부 스탕일링, 인라인 스타일링, 조건연산자, if문을 활용하여 컴포넌트 만들기

const Test2 = () => {
    const name = "김보경"
    const style = {
        backgroundColor : "#79E0EE",
        color : "#A9907E"
    }
  return (
    <div className="App">
        <h1 className="title">행운의</h1>
        <h2 className="item_tit">{name === '김보경' ? '편지' : '행운의'}</h2>
        <p style={style}>이 편지는 영국에서 시작되어....</p>
        
    </div>
  )
}

export default Test2