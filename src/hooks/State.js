import { useState } from "react";

function State() {
  const [user, setUser] = useState({ name: 'Rio', count: 9 });

  const [count, setCount] = useState(() => {
    console.log('first render');
    return 5;
  });

  function decrement() {
    // take previuos value
    setCount(prevValue => prevValue - 1);
    // spread out object
    setUser(prev => ({...prev, count: prev.count - 1}));
};

function increment() {
  //takes current value
  setCount(count + 1);
};

return (
  <>
    <button onClick={increment}>+</button>
    <p>{count}</p>
    <h3>{user.count}</h3>
    <button onClick={decrement}>-</button>
  </>
);
}

export default State;