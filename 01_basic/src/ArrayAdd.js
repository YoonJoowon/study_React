import React, {useState} from "react";

function ArrayAdd(){
    const[text, setText] = useState('');
    const change = (e) => {
        setText(e.target.value)};
    const onReset = () => {setText('')}

    return(
        <div>
            <input onChange={change} value={text}/>
            <button>초기화</button>
            <div><b>입력값:{text}</b></div>
        </div>
    )

}

export default ArrayAdd



// // map 복습

// const arr = [1,2,3,4,5];

// // 1. 일반
// arr.map(function(item, index){
//     console.log(index, item);
// });

// // 2. 화살표
// arr.map((item, index) => {
//     console.log(index, item);
// });