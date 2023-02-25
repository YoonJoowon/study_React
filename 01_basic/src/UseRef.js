import React, {useState, useRef} from 'react';
// , {사용할 이벤트} 를 통해서 끌고오기q

function UseRef1(){
    const [inputs, setInputs] = useState({ //useState(초기값을 객체형태로)
            name:'', nickname:''
        })

    const nameInput = useRef();

    const {name, nickname} = inputs; // 비구조화 할당 방식
    
    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
            // ... 은 해당 객체를 복사한다는 뜻
        })
    }

    const onReset = () => {
        setInputs({
            name:'',
            nickname:''
        })
        nameInput.current.focus()
    }

    return(
        <div>
            <input name="name" placeholder='이름' onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder='닉네임' onChange={onChange} value={nickname}/>
            {/* input은 안에 내용물이 없기 때문 */}
            <button onClick={onReset}>초기화</button>
        </div>
    )
};

export default UseRef1;