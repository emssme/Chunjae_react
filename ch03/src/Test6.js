import React, {useMemo, useEffect, useState} from 'react'

const Test6 = () => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);
    const location = useMemo(() => {
        return { country : isKorea ? '대한민국' : '하와이'}
    }, [isKorea])   //[] 안에 기재된 내용은 항상 기억이 되어 반복 사용이 가능하도록 함.
    useEffect(() => {
        console.log('useEffect .... 호출');
    }, [location])
    return (
        <div>
            <header>
                <h2>어느나라에 계세요?</h2>
                <p>국가: {location.country}</p>
                <button onClick={() => setIsKorea(!isKorea)}>갱신</button>
                
            </header>
        </div>
    )
}

export default Test6