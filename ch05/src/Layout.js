import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => { navigate(-1);};
    const goHome = () => { navigate('/',{replace : true} );}
    const goArticles = () => { navigate('/articles', {replace : true})}
  return (
    <div>
        <header style={{background:'#ececec', padding: 20, fontSize:24}}> 
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈</button>
            <ul>
                <li><Link to='/articles'>게시판</Link></li>
                <li><Link to='/login'>로그인</Link></li>
                <li><Link to='/mypage'>마이페이지</Link></li>
            </ul>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout