import React from "react";

function ArrayAdd2({username, email, onInputChange, onCreateClick}){
    // 하위컴포넌트 파라미터자리에 중괄호를 통해서 데이터명들을 받음

    console.log("ArrayAdd component! - input, button")

    return(
        <div>
            <input 
            name="username" 
            placeholder="계정명" 
            onChange={onInputChange}
            value={username}/>

            <input 
            name="email" 
            placeholder="이메일" 
            onChange={onInputChange}
            value={email}/>
            <button onClick={onCreateClick}>등록</button>
            {/* 등록이라는 버튼 감지가 이루어졌을때 onCreate에 담는다 */}
            {/* App의 onCreateClick를 중괄호 안에 담는다 */}
        </div>
    )
}

export default React.memo(ArrayAdd2);