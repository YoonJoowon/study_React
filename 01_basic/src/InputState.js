import React, {useState} from "react";
// useState 가 import 안에 들어가있어야 값을 끌고올 수 있음

function InputState(){
    const[text, setText] = useState('');
    // [현재상태변수, setter함수] = 초기값 셋팅 공백('')
    const change = (e) => {
        // console.log(e) //여러 이벤트함수 속성들을 호출
        // console.log(e.target) //이벤트함수를 연결한 후 target을 지정
        // console.log(e.target.value) //이벤트함수가 걸린 input 태그의 value 입력값
        setText(e.target.value)};
    // 무조건 onChange 두 번째 단어 대문자 해야 이벤트로 인식함
    const onReset = () => {setText('')}

    return(
        <div>
            <input onChange={change} value={text}/>
            {/* change란 함수를 돌리겠다 / onChange는 이벤트중 하나 ex) onClick */}
            <button>초기화</button>
            <div><b>입력값:{text}</b></div>
        </div>
        // 태그가 2개이상이면 감싸주어야함
    )

}

export default InputState