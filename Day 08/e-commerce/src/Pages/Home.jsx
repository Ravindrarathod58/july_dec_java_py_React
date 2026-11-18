import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
function Home() {
  // State to hold the products
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  //   side effect to fetch the data
  useEffect(() => {
    // fetch ( async)

    async function getData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div className="mt-3 container d-flex flex-wrap gap-2">
      {data.length > 0 ? (
        data.map((item) => (
          <Card
            key={item.id}
            src={item.image}
            title={item.title}
            price={item.price}
            id={item.id}
            action={setCart}
          />
        ))
      ) : (
        <div> Data Not available </div>
      )}
    </div>
  );
}

export default Home;
