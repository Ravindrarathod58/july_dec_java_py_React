import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //

  //   function increseCount(n) {
  //     const newArr = [...count, n];
  //     setCount(newArr);
  //   }

  //   let count = 0;

  //   function counter() {
  //     count++;
  //   }

  function handleUpdate() {
    setCount((prev) => prev + 1); // 1 + 1
    setCount((prev) => prev + 1); // 1 + 1
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    console.log(count);
  }
  return (
    <div className="counterDiv">
      <output>{count}</output>
      <div className="buttons">
        <button onClick={handleUpdate}>+1</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
