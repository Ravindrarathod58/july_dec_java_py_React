import { useEffect, useState } from "react";
import Loader from "./components/Loader.jsx";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
function App() {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]); // electronic
  const [copy, setCopy] = useState([]); // electronic
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // setMessage("hello from useEffect");
    // fetch

    //asynchronous function
    async function getData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);
        setCopy(data);

        const res1 = await fetch(
          "https://fakestoreapi.com/products/categories",
        );
        const category = await res1.json();
        setCategories(category);

        console.log(data);
      } catch (error) {
        console.error("error loading data");
        // throw new Error("error while loading the data");
      } finally {
      }
    }

    getData();
  }, []);

  function filterData(e) {
    let val = e.target.value;
    if (val === "all") {
      setCopy(data);
      return;
    }

    const d = data.filter((p) => p.category === val);
    setCopy(d);
  }

  function sortProducts(e) {
    const val = e.target.value;

    if (val === "low") {
      copy.sort((a, b) => a.price - b.price);
      setCopy([...copy]);
    } else if (val === "high") {
      copy.sort((a, b) => b.price - a.price);
      setCopy([...copy]);
    } else {
      setCopy(data);
    }
  }
  return (
    <div>
      <Header />
      {/* {isLoading && <Loader />}
      <h1>Hello</h1> */}
      <div className="container d-flex gap-5 mb-4">
        <div className="">
          <select name="" id="" onChange={(e) => filterData(e)}>
            <option value="all">All</option>
            {categories.map((cat) => (
              <option value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="d-flex">
          <input type="text" className="form-control" />
          <button className="bi bi-search btn btn-outline-primary"></button>
        </div>

        <div>
          <select name="" id="" onChange={(e) => sortProducts(e)}>
            <option value="all">all</option>
            <option value="low">Low to high</option>
            <option value="high">High to low</option>
          </select>
        </div>
      </div>
      {copy.length > 0 ? (
        <div className="container d-flex flex-wrap gap-4">
          {copy.map((product) => (
            <Card
              src={product.image}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          ))}
        </div>
      ) : (
        <div>Data not found</div>
      )}
    </div>
  );
}

export default App;
