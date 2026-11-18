import { useEffect, useState } from "react";
import { useParams } from "react-router";
function ProductDetails() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await fetch("https://fakestoreapi.com/products/" + id);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, []);

  return <div>products Detailes page {id}</div>;
}
export default ProductDetails;
