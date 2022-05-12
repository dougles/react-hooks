import { useState, useEffect } from "react";

function Effect() {
    const [content, setContent] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${content}`)
            .then(response => response.json())
            .then(json => setItems(json))
        
            return ()=> {
                //clean up, events, listeners.
            }

    }, [content]); // empty array is once effect call

    return (
        <>
            <button onClick={() => setContent('posts')}>Posts</button>
            <button onClick={() => setContent('users')}>Users</button>
            <button onClick={() => setContent('comments')}>Comments</button>
            <h1>{content}</h1>
            {items.map(item => (<pre>{JSON.stringify(item)}</pre>))}
        </>
    );
}

export default Effect;