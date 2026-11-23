import { Link } from "react-router";
import { useNavigate } from "react-router";

function Card({ title, price, image, id }) {
  const navigate = useNavigate();
  function navi() {
    navigate("/checkout/" + id);
  }
  return (
    <div>
      <Link to={"/details/" + id}>
        <img src={image} />
      </Link>
      {title}

      <button onClick={navi}>Buy Now</button>
      <button>add to cart</button>
    </div>
  );
}

export default Card;
