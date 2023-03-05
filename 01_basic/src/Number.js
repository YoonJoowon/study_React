import React, {useEffect, useState} from "react";

    const Number = ()=>{

    const [number, setNumber] = useState(0)
    // setNumber useState = 초기값
    const [name, setName] = useState("변경 전 이름")

    useEffect(()=>{console.log('hello')})
    // 클릭버튼 누르는 만큼 hello가 찍힘
    useEffect(()=>{console.log('hello')},[])
    // 클릭버튼과 hello 상관 없음
    useEffect(()=>{console.log('hello')},[name])
    // 클릭버튼 x 변경버튼(name) 누를 때 hello 찍함

    
    const counter = () => setNumber(number+1);
    const nameChanger = () => setName("변겅 후 이름")


    return(
        <div>
            <button onClick={counter}>클릭</button>
            <button onClick={nameChanger}>변경</button>
            <div>{number}</div>
            <div>{name}</div>
        </div>
    )
}

export default Number;