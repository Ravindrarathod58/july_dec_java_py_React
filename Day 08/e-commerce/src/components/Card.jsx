import { Link } from "react-router";
function Card({ src, title, price, id, action }) {
  return (
    <Link to={"/productDetail/" + id}>
      <div
        className="d-flex flex-column border border-2 p-3 rounded-5 shadow"
        style={{ width: "300px", height: "450px" }}
      >
        <img src={src} alt="" className="h-75" />

        <div className="d-flex flex-column">
          <span>{title}</span>
          <span>&#8377; {price}</span>

          <div className="d-flex w-100 justify-content-around">
            <button className="btn btn-primary w-50" to={"/checkout"}>
              Buy Now
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                action(id);
              }}
            >
              <span className="bi bi-cart"></span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
