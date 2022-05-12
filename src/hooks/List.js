import { useEffect, useState } from "react"

export default function List({ getItems }) {
    const [itesm, setItems] = useState([]);

    useEffect(()=> {
        setItems(getItems())
    },[getItems])

    return itesm.map( item => <div key={item}> {item} </div>)
}