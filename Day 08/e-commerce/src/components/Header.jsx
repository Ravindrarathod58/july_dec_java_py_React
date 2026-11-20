import { useNavigate } from "react-router";
function Header() {
  const navigate = useNavigate();
  function nav() {
    navigate("/cart");
  }

  return (
    <div className="mb-2" style={{ height: "80px" }}>
      <header className="d-flex justify-content-between align-items-center p-3 border border-2 position-fixed top-0 w-100 bg-light">
        <span>OnlineShop</span>
        <div className="d-flex align-items-center">
          <input type="text" className="form-control" placeholder="Search.." />
          <span className="bi bi-search"></span>
        </div>
        <div>
          <button onClick={nav}>
            <span className="bi bi-cart"></span>
          </button>
          <button>
            <span className="bi bi-person"></span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
