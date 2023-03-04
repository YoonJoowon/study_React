import React from 'react';

function User({propUser, onRemoveClick, onToggleClick}){

    const {username, email, id, active} = propUser;

    // 2. propUser 작성 반복을 피하는 방법 - 비구조(구조분해)
    return(
        <div>
            <b style={{cursor:'pointer', color:active?'red':'black'}} onClick={()=>{onToggleClick(id)}}>{username}</b>
            {/* 노랜색 중괄호는 키벨류의 객체 */}
            <span>({email})</span>
            <button onClick={()=>onRemoveClick(id)}>삭제</button>
            {/* OnClick을 했을 때 onRemove 시행 위의 onRemove 의미 */}
        </div>       
    );

    // 1. propUser 작성 반복해서 적는 방법
    // return(
    //     <div>
    //         <b>{propUser.username}</b><span>({propUser.email})</span>
    //         <button onClick={()=>onRemoveClick(propUser.id)}>삭제</button>
    //         {/* OnClick을 했을 때 onRemove 시행 위의 onRemove 의미 */}
    //     </div>       
    // );
}

function UserList({propUsers, onRemove, toggleClick}){

    return(
        <div>
            {propUsers.map(u=>(<User propUser={u} key={u.id} onRemoveClick={onRemove} onToggleClick={toggleClick}/>))}
                            {/* {return ( <User ~~~~ />)} 도 가능*/}
            
            {/* User 라는 함수에게 u(App의 기존 객체들)를 user라는 이름으로 돌림 */}
            {/* User 라는 하위컴포넌트에 a, key, oneRemoveClick 라는 props 이름으로 전송 */}

            {/* 위의 onClick과 연결된 이곳의 onRemove를 가져감 */}
            {/* 명칭이름={함수} */}
            {/* map = users 안에있는 것을 하나하나 반복해서 꺼내옴 */}
        </div>
    )
}

export default UserList;
