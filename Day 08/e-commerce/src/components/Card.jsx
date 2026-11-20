import { Link, useNavigate } from "react-router";
function Card({ src, title, price, id, type, action }) {
  const navigate = useNavigate();
  function nav() {
    navigate("/checkout/" + id);
  }

  return (
    // <Link to={"/productDetail/" + id}>
    <div
      className="d-flex flex-column border border-2 p-3 rounded-5 shadow"
      style={{ width: "300px", height: "450px" }}
    >
      <img src={src} alt="" className="h-75" />

      <div className="d-flex flex-column">
        <span>{title}</span>
        <span>&#8377; {price}</span>

        <div className="d-flex w-100 justify-content-around">
          <button
            onClick={nav}
            className="btn btn-primary w-50"
            to={"/checkout"}
          >
            Buy Now
          </button>
          {type === "product" ? (
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                action(id);
              }}
            >
              <span className="bi bi-cart"></span>
            </button>
          ) : (
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                action(id);
              }}
            >
              <span className="bi bi-trash "></span>
            </button>
          )}
        </div>
      </div>
    </div>
    // </Link>
  );
}

export default Card;
