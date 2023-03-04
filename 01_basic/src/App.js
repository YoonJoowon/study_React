// useEffect 예제1.

import React from "react";
import UseEffet from "./UseEffect";

function App(){

  return(<UseEffet/>)
  
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// // import Mycomponent from './MyComponent';
// import React, {useState, useRef, useEffect} from 'react';
// // import Hello from './Hello';
// import UserList from './UserList';
// import ArrayAdd2 from './ArrayAdd2';
// // 앞에는 함수명 뒤에는 .js가 생략된 파일명

// function App(){

//   const [inputs, setInputs] = useState({username: "", email:"" });

//   const {username, email} = inputs;

//   const handleInputChange = (e) => {
//     const {name, value} = e.target; 
//     // e.target은 onchange이벤트가 설정된input 태그를 가리킴
//     setInputs({
//       ...inputs,
//       [name] : value
//     })
//   }

//   const [users, setUsers]= useState([
//     // users라는 변수 안에 있는 배열
//     // usesState를 활용해서 상태관리 - (초기값)파라미터 안에 집어넣어서 관리
//     // setUsers를 활용해서 변화된 것을 적용
//     {id:1, username: 'user1', email: 'user1@gmail.com', active : true},
//     {id:2, username: 'user2', email: 'user2@gmail.com', active : false},
//     {id:3, username: 'user3', email: 'user3@gmail.com', active : false}
// ]);

//   const nextId = useRef(4)

//   const handleCreateClick = () => {
//     // 추가되는 이메일을 받아주는 함수 - ArrayAdd 의 onCreate를 가져옴
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     }

//     setUsers(users.concat(user))
//     setInputs({
//       username:"",
//       email:""
//     });
//     nextId.current +=1;
//   }

//   const handleRemoveClick = id => {
//     setUsers(users.filter(user => user.id!==id));
//   }

//   const handleToggleClick = (id) => {
//     // 삼항연산자
//     setUsers(users.map(user => user.id===id?{...user, active: !user.active}:user))

//   }





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


// 3. 원본 파일

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

