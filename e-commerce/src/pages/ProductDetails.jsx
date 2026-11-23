import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/GetDataContext";
function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  //   const { data } = useContext(DataContext);

  useEffect(() => {
    async function getProduct() {
      const res = await fetch("https://fakestoreapi.com/products/" + id);
      const data = await res.json();
      setProduct(data);
    }

    getProduct();
  }, []);

  return (
    <div>
      {product.id}
      details
    </div>
  );
}

export default ProductDetails;
