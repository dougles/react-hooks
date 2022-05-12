import { useState, useRef, useEffect } from "react";

export default function Ref() {
    const [name, setName] = useState('');
    const renderCount =  useRef(1);
    const inputRef =  useRef();

    useEffect(()=>{
        renderCount.current = renderCount.current + 1;
    });

    function focus(){
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}></input>
            <div>My name is {name}</div>
            <div> Render  {renderCount.current} times</div>
            <button onClick={focus}>Focus</button>
        </>
    )
}

