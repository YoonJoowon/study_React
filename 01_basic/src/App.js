// useRef() 와 useEffect() 예제

import React, { useEffect, useRef } from "react";
import './App.css';

function App(){
  const inputRef = useRef()

  useEffect(()=>{
    // 초기 랜더링시 보여지게 되는 화면
    // useEffect는 뎁스라는것을 넣고 안넣고를 통해 조건을 만듬
    console.log(inputRef);
    inputRef.current.focus();
  },[])

  const loginAlert = ()=>{
    alert(` Welcome! ${inputRef.current.value}`)
    // current의 value를 보여주겠다 = id값
    inputRef.current.focus();
  }

  return(
    <div className="App">
      <header className="App-header">
        <input ref={inputRef} type="text" placeholder="id"/>
        {/* ref를 통해서 포커스 지정 */}
        <input type="text" placeholder="pw"/>
        <button onClick={loginAlert}>Login</button>
      </header>

    </div>
  )
}

export default App;




// useEffect 예제2.

// import React from "react";
// import Number from "./Number";

// function App(){

//   return(
//     <Number/>
//   )

// }

// export default App;





// useEffect 예제1.

// import React from "react";
// import UseEffet from "./UseEffect";

// function App(){

//   return(<UseEffet/>)
  
// }

// export default App;




// Main

// import logo from './logo.svg';
// import './App.css';
// // import Mycomponent from './MyComponent';
// import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
// // import Hello from './Hello';
// import UserList from './UserList';
// import ArrayAdd2 from './ArrayAdd2';
// // 앞에는 함수명 뒤에는 .js가 생략된 파일명

// function App(){

//   function countActiveUsers(users){
//     console.log("빨간색의 활성상태 유저명 수 계산중...")
//     return users.filter(user => user.active).length;
//     // users안의 배열안에 user가 active인 것 찾음
//   }

//   const [inputs, setInputs] = useState({username: "", email:"" });

//   const {username, email} = inputs;

//   const handleInputChange = useCallback( (e) => {
//         const {name, value} = e.target; 
//         // e.target은 onchange이벤트가 설정된input 태그를 가리킴
//         setInputs({
//           ...inputs,
//           [name] : value
//         }
//       )
//     },[inputs]
//   )

//   const [users, setUsers]= useState([
//     // users라는 변수 안에 있는 배열
//     // usesState를 활용해서 상태관리 - (초기값)파라미터 안에 집어넣어서 관리
//     // setUsers를 활용해서 변화된 것을 적용
//     {id:1, username: 'user1', email: 'user1@gmail.com', active : true},
//     {id:2, username: 'user2', email: 'user2@gmail.com', active : false},
//     {id:3, username: 'user3', email: 'user3@gmail.com', active : false}
// ]);

//   const nextId = useRef(4)

//   // useCallback 을 쓰는 이유 (= 함수 재사용과 관련)
//   // useCallback : useCallback 을 사용하지 않으면 컴포넌트가 리렌더링 될때마다 함수들이 새로 만들어짐
//   // 그러나 useCallback을 사용하게 되면 한 번 만든 함수를 필요할때만 새로만듬 (재사용이 가능해짐) - 최적화
//   const handleCreateClick = useCallback(() => {
//       // 추가되는 이메일을 받아주는 함수 - ArrayAdd 의 onCreate를 가져옴
//       const user = {
//         id: nextId.current,
//         username,
//         email
//       }

//       // setUsers([...users, user])
//       setUsers(users => users.concat(user))
//       setInputs({
//         username:"",
//         email:""
//       });
//       nextId.current +=1;
//     },[username, email]
//   )

//   const handleRemoveClick = useCallback( id => {
//       setUsers(users.filter(user => user.id!==id));
//     },[users]
//   )

//   const handleToggleClick = useCallback( (id) => {
//       // 삼항연산자
//       setUsers(users.map(user => user.id===id?{...user, active: !user.active}:user))
//     },[users]
//   )

//   const count = useMemo(()=>countActiveUsers(users),[users]);

//   return(
//     <div>
//       {/* ArrayAdd2, UserList 하위 컴포넌트에 보냄 */}
//       <ArrayAdd2
//         username={username}
//         // 중괄호 안에는 username이라 적혀있는 데이터를 가져옴
//         email={email}
//         onInputChange={handleInputChange}
//         // App안의 함수 const 중 중괄호 onChange를 호출
//         // 앞의 onChange는 하위컴포넌트를 props 보낼 때 onChange로 보내겠다는 뜻
//         onCreateClick={handleCreateClick}        
//         />
//       <UserList propUsers={users} onRemove={handleRemoveClick} toggleClick={handleToggleClick}/>
//       {/* UserList 의 userlist - users 호출  */}
//       <div>활성사용자 수 : {count}</div>
//     </div>
//   );
// }

// export default App;



// 5. function App(){
//   return(
//     <InputState/>
//   );
// }

// export default App;




// 4. useState : 버튼 동적구형
// function App(){
//   return (<Counter/>)
// }




// 3. props : 두 컴포넌트 사이에 데이터 전송
// 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용

// function App(){
//   return (<Hello name='react' color='red'/>)
// }

// export default App;




// 2. 연습 파일 - 컴포넌트 export, import 연습

// function App(){
//   return <Mycomponent/>;
//   // <> 를 활용해 태그를 함
// }

// export default App;
// // 다른 곳에서도 쓸수있게 내보내기 입력함




// 1. 원본 파일

// // JSX = JS + HTML
// function App() {
//   const text = 'JSX & React project!'
//   // const로 할당 가능
//   return (
//     // function 함수형 컴포넌트는 return으로 정의 class형 컴포넌트는 render()함수에서 코드를 반환
//     // 1=1) 함수형 컴포넌트 : function으로 정의, return 문에 jsx 코드를 반환
//     // 1=2) 함수형 컴포넌트 : 화살표함수로 정의, return 문에 jsx 코드를 반환
//       // ex) const namebox = () =? {}
//     // 2=1) 클래스형 컴포넌트 : function으로 정의, return 문에 jsx 코드를 반환
//       // eX) class namebox extemds Component{}
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {text}
//           {/* jsx의 표현식 { } */}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }