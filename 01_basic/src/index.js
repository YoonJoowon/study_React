import React from 'react';
// react를 function으로 생성하지 않았는데 왜 들어가있냐? 하면
// jsx는 babel 이라는 웹팩을 통해 react를 유효힌 javascript로 변환하기 때문
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// conponent 와 확장자명을 끌어옴
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root 라는 id 명을 가져옴

root.render(
  // 렌더 즉 화면에 보여지게끔 가공을 하겠다
  // <React.StrictMode>
  //   {/* console돌리면 2개씩 나오는 이유임 주석처리하면 하나만 나옴 */}
  //   <App />
  //   {/* App 태그를 해서 이 자리에 불러옴 */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
