import { DataContext } from "../context/GetDataContext";
import { useContext } from "react";
import Card from "../components/Card";
// import { DataProvider } from "../context/GetDataContext";
function HomePage() {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <div>
      {data.length > 0 ? (
        data.map((items) => (
          <Card
            title={items.title}
            price={items.price}
            image={items.image}
            id={items.id}
          />
        ))
      ) : (
        <div>Data not Found</div>
      )}
    </div>
  );
}

export default HomePage;
