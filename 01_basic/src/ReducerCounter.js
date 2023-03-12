import React, { useReducer } from "react";

// 3. useReducer()의 두번째 파라미터 initialState 초기값 준비!
const initialState = {count : 0}

// 2. useReducer()의 첫번째 파라미터 reducer() 함수 준비!
function reducer(state, action){
    // action이 dispatch에서의 타입을 받음
    switch(action.type){
        case "INCREMENT":
            return state.count < action.max?{count: state.count+action.step}:state;
            // 앞의 조건이 참이면 : 기준 앞쪽으로 실행 거짓이면 뒤쪽으로 실행
            // state.count = 0 / action은 action안의 해당 type의 max 값을 의미(5)
            // 최대값인 5를 넘어가면 안되기 때문
        case "DECREMENT":
            return state.count > action.min?{count: state.count-action.step}:state;
        case "RANDOM":
            return {count:Math.floor(Math.random()*(action.max-action.min))+action.min};
        case "RESET":
            return {count : 0};
        default :
            throw new Error("지원하지 않는 action type", action.type)
        
    }
}

function ReducerCounter({step=1, min=-3, max=15}){
    // 1. useReducer() 작성 - 상단에 준비시킨 파라미터 reducer() initialState 사용!
    const [state, dispatch] = useReducer(reducer, initialState);
    // useReducer는 useState랑 비슷함
    // state 업데이틀를 reducer가 (setter같이) 해줌

    return(
        <>
            <p>증감숫자범위 : {step} <br></br> 최소 : {min} 최대 : {max}</p>
            <h2>{state.count}</h2>
        
            <button onClick={()=>{dispatch({type:"INCREMENT", step, max})}}>증가</button>&nbsp;
            {/* 클릭이 일어나면 dispatch 실행 - type의 종류를 개발자가 설정 - reducer 함수 실행*/}
            <button onClick={()=>{dispatch({type:"DECREMENT", step, min})}}>감소</button>&nbsp;
            <button onClick={()=>{dispatch({type:"RANDOM", min, max})}}>랜덤</button>&nbsp;
            <button onClick={()=>{dispatch({type:"RESET"})}}>최소화</button>
        
        </>


    )


}




export default ReducerCounter;