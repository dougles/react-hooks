import { useState, useMemo } from "react";

function Memo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);


    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        };
    }, [dark]);

    const doubleNumber = useMemo(() => { return slowFuntion(number); }, [number])

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
            <button onClick={() => setDark(prevDark => !prevDark)}> Change theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
}

function slowFuntion(num) {
    for (let i = 0; i < 10000000000; i++) { }
    return num * 2;
}

export default Memo;