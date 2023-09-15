//4. Test1 컴포넌트 생성(할 때 대문자로 해야함)
//5. 표현식과 if 조건 연산, OR(||) 연산
//6. 내부스타일링
//7. 인라인 스타일.

//ES5
function Test1() {
    const name = "김보경";
    const param = undefined;
    const style = {
        backgroundColor : "pink",
        color : "white",
        fontSize : "32px",
        fontWeight : "bold",
        padding : 10
    }
    return (
      <div className="App">
        <h2 className="title">{name} 테스트 페이지</h2>
        <h3 className="item_tit">{ name === '김보경' ? '천재' : '둔재'}</h3>
        <h4 className="cate_tit">{ param || <span>천재</span>}</h4>
        <p style={style}>이 내용은 내부 스타일 적용부입니다.</p>
        <div style={{
            backgroundColor :"skyblue", color:"#FFFF", fontSize : "20px"}}>{ name }</div>
        <p className="comment">안녕하세요 테스트입니다.</p>
      </div>
    );
  }

  export default Test1;