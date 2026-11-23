function Card({ src, title, price, id }) {
  return (
    <div
      className="d-flex flex-column border border-2 p-3 rounded-5 shadow"
      style={{ width: "300px", height: "450px" }}
    >
      <img src={src} alt="" className="h-75" />

      <div className="d-flex flex-column">
        <span>{title}</span>
        <span>&#8377; {price}</span>

        <button className="btn btn-primary" value={id}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;
