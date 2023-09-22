import React from 'react'
import {Link} from 'react-router-dom'; //컴포넌트

const Home = () => {
  return (
    <div>
        <h2>Home</h2>
        <hr/>
        <ul>
            <li>
               <Link to="/about">Intro</Link>
            </li>
            <li>
              <Link to="/profile/sangmin">상민</Link>
            </li>
            <li>
              <Link to="/profile/yeeun">예은</Link>
            </li>
            <li>
              <Link to="/profile/sehoon">세훈</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home