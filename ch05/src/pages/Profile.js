import React from 'react';
import {useParams} from 'react-router-dom'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

const data = {
  sangmin: {
    name: '최상민',
    description: '백엔드를 좋아하는 개발자',
    img: img1,
  },
  yeeun: {
    name : '김예은',
    description : '프론트엔드를 좋아하는 개발자',
    img: img2,
  },
  sehoon: {
    name: '오세훈',
    description: '서울을 사랑하는 개발자',
    img: img3,
  },
}
const Profile = () => {
    const params = useParams();
    const profile = data[params.username];
    return (
      <div>
        <h2>Profile</h2>
        <hr/>
        {profile ? (
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <img src={profile.img}/>
          </div>
        ) : (
          <p>해당 회원이 존재하지 않습니다.</p>
        )}
      </div>
    )
}

export default Profile