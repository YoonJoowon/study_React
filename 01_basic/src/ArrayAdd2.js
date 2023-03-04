import React from "react";

function ArrayAdd2({username, email, onInputChange, onCreateClick}){

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

export default ArrayAdd2