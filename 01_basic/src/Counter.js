import React, {useState} from "react";

function Counter(){

    const [number, setNumber] =useState(0)
    // const onIncrease = ()=>{setNumber(number+1)}
    // const onDecrease = ()=>{setNumber(number-1)}

    const onIncrease = ()=>{setNumber(prevNumber=>prevNumber+1)}
    const onDecrease = ()=>{setNumber(prevNumber=>prevNumber-1)}
    // number를 가져오지않고 자체적으로 상태관리도 가능

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            {/* 함수 호출할 때 onDecresae()라고 쓰는데 이렇게 하면 안됨 */}
        </div>
    )
}

export default Counter;








