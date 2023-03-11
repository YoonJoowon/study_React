import React, { useEffect, useRef, useState } from "react";

function MathQuiz(){
    const [first, setFirst] = useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = useState(Math.ceil(Math.random()*9));
    const [first2, setFirst2] = useState(Math.ceil(Math.random()*9));
    const [second2, setSecond2] = useState(Math.ceil(Math.random()*9));
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    // ''로 넣어서 초기값을 공백으로 해줘야 함
    const [result, setResult] = useState('');
    const [result2, setResult2] = useState('');

    const input1=useRef(null);
    const input2=useRef(null);

    const multiplySubmitForm = (e)=>{
        e.preventDefault();
        // 디폴트 값 유지
        if(parseInt(value) === first*second){
            // parseInt 문자를 숫자로 바꾸어줌
            setResult('정답')
            setFirst(Math.ceil(Math.random()*9))
            setSecond(Math.ceil(Math.random()*9))
            setValue('')
            input2.current.focus();

        }else{
            setResult('x')
            setValue('')

        }
    }

    const plusSubmitForm = (e)=>{
        e.preventDefault();
        if(parseInt(value2) === first2+second2){
            setResult2('정답')
            setFirst2(Math.ceil(Math.random()*9))
            setSecond2(Math.ceil(Math.random()*9))
            setValue2('')

        }else{
            setResult2('x')
            setValue2('')
        }
    }

    return(
        <div className="App-header">
            <div>
                <h4 style={{color:"lightgreen"}}>Quiz 1</h4>
                <div> {first} x {second} = ? </div>
                <form onSubmit={multiplySubmitForm}>
                    <input ref={input1} type="number" value={value} onChange={(e)=>setValue(e.target.value)}/>
                    {/* input에 값이 입력 되었을때 onChange가 감지 / e.target.value 는 이벤트가 발생한 타겟(해당 태그)의 벨류값*/}
                    <button>입력!</button>
                </form>               
                <h6 style={{color:"red"}}>{result}</h6>
            </div>
            
            <div>

                <h4 style={{color:"lightgreen"}}>Quiz 2</h4>
                <div> {first2} + {second2} = ? </div>
                <form onSubmit={plusSubmitForm}>
                    <input ref={input2} type="number" value={value2} onChange={(e)=>setValue2(e.target.value)}/>
                    <button>입력!</button>
                </form>                
                <h6 style={{color:"red"}}>{result2}</h6>
            </div>

        </div>
        
    )
}

export default MathQuiz;