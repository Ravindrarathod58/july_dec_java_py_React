function Card({ image, title, description }) {
  // operations
  return (
    <div className="card">
      <img src={image} alt="" />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}
export default Card;
