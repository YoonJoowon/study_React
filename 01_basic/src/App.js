import logo from './logo.svg';
import './App.css';
// import Mycomponent from './MyComponent';
import React from 'react';
// import Hello from './Hello';
import Counter from './Counter';
// 앞에는 함수명 뒤에는 .js가 생략된 파일명

// 4. useState : 버튼 동적구형
function App(){
  return (<Counter/>)
}


// 3. props : 두 컴포넌트 사이에 데이터 전송

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

export default App;
