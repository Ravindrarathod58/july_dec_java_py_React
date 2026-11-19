import { useEffect, useState } from "react";
import { useParams } from "react-router";

function CheckOut() {
  const [address, setAddress] = useState("Warje Malwadi Pune");
  const [product, setProduct] = useState(null);
  const options = ["Net Banking", "Scan and Pay", "EMI", "Cash On Delivery"];

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

  return (
    <div className="container">
      <div className="row min-vh-100 border border-2 border-primary p-3">
        <div className="col  border-end border-2 border-danger">
          <div className="container mt-5 border h-25 rounded-4 shadow d-flex justify-content-between">
            <div className="pt-3">
              <p className="fw-bold"> Delivering to Ravindra </p>
              <p>{address}</p>
            </div>
            <button className="btn text-primary" style={{ height: "50px" }}>
              Change Address
            </button>
          </div>

          <div className=" mt-5 h-50 p-4">
            <p className="fw-bold">Payment Methods</p>
            <div className="d-flex flex-column gap-3">
              {options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    className="form-control-radio"
                    name="option"
                    value={option}
                  />
                  {option}
                </label>
              ))}

              <button className="btn btn-success">Pay Now</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="h-50 d-flex flex-column justify-content-around fw-bold">
            <span>Items - {product?.price}</span>
            <span>Delivery</span>
            <span>Marketplace Fee</span>
            <span>Total</span>
            <span>Delivery Charges</span>
            <span className="h3">order Total</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckOut;
