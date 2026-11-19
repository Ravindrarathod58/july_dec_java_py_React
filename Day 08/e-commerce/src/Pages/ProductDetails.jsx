import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
function ProductDetails() {
  const [product, setProduct] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

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

  // setTimeout(() => {
  //   console.log(product);
  // }, 2000);

  function nav(id) {
    navigate("/checkout/" + id);
  }

  return (
    <div className="container p-3">
      <div className="row gap-2 " style={{ minHeight: "50vh" }}>
        <div
          className="col rounded-5 p-5 border border-3 d-flex justify-content-center align-items-center"
          style={{ minHeight: "400px" }}
        >
          {/* <span>{id}</span> */}
          <img src={product?.image} alt="" />
        </div>
        <div
          className="col rounded-5 p-5 border border-3"
          style={{ minHeight: "400px" }}
        >
          <h2>{product?.title}</h2>
          <p>
            Rating : {product?.rating.rate} Reviewed By :{" "}
            {product?.rating.count}{" "}
          </p>
          <p className="fw-bold"> Category : {product?.category}</p>
          <p>{product?.description}</p>
          <p className="h3">Price : &#8377;{product?.price}</p>
          <div className="mt-5 d-flex gap-5">
            <button className="btn btn-lg btn-outline-primary fw-bold">
              <span className="bi bi-cart"></span> Add to Cart
            </button>
            <button
              onClick={() => {
                nav(product?.id);
              }}
              className="btn btn-lg btn-outline-warning"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
