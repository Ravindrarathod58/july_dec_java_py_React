import { useNavigate } from "react-router";
function Loader() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/home");
  }, 5000);

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <span className="spinner-border"></span>
    </div>
  );
}

export default Loader;
