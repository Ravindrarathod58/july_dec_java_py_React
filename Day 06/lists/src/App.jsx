import { useState } from "react";
import List from "./list.jsx";
function App({ fruitsArr }) {
  // const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(null);
  const [name, setName] = useState(null);
  const [fruits, setFruits] = useState(fruitsArr); //([
  //   {
  //     id: 1,
  //     name: "Apple",
  //   },
  // {
  //   id: 2,
  //   name: "Mango",
  // },
  // {
  //   id: 3,
  //   name: "Banana",
  // },
  // {
  //   id: 4,
  //   name: "Cherry",
  // },
  // ]);
  // function handle() {}

  // const fruits =

  function update() {
    let newArr = [];
    fruits.forEach((item) => {
      if (item.id == current) {
        item.name = name;
        newArr.push(item);
      } else {
        newArr.push(item);
      }
    });
    setFruits(newArr);
  }

  function remove(id) {
    const newArr = fruits.filter((item) => item.id !== id);
    setFruits(newArr);
  }

  return fruits.length > 0 ? (
    <List fruits={fruits} />
  ) : (
    <div>No items available in the list</div>
  );
}

export default App;
