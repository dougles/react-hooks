import { useState, useCallback } from "react";
import  List  from "./List";

export default function Callback() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    },[number]);

    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    };

    return (
        <>
            <div style={theme}>
                <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
                <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
                <List getItems={getItems} />
            </div>
        </>
    )
}

