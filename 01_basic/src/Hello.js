import React from "react";

// 3. 비구조화(=구조분해) 방식
// 간결하고 짧게 쓸 수 있음
function Hello({color, name}){
    return <div style={{color}}> 안녕하세요 {name} </div>
}

export default Hello;


// function Hello(props){
//     // 1. porps - 콘솔에 출력
//     console.log(props);
//     // 출력했을때 props에 뭐가 들어있는지 보기위함

//     // 2. props - 브라우저에 출력
//     return <div style={{color:props.color}}> 안녕하세요{props.name} </div>
//     // props의 name 을 구체화시켜서 데이터를 받음 or color 또한 마찬가지
// }

// export default Hello;








