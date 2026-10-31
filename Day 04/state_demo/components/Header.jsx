import { useState } from "react";
function Header() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const obj = {
    id: 1,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    title: "HTML",
    description: "The building blocks of every webpage",
  };

  function handleIncrement() {
    setCart([...cart, obj]); //
    /*
        const cart = [
            {

                id : 1,
                title : sjdk
            
                }
            
        ]

        [ 
             {
                id : 1,
                title : sjdk
            
                },
                obj
        ]
    */
    console.log(cart);
    setCount(cart.length);
  }
  return (
    <>
      <header>
        <div className="branding">Small Amazon</div>
        <nav>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Products</a>
          <a href="">Contact</a>
        </nav>
        <div className="buttons">
          <button className="cart">
            <span className="badge">{count}</span>
            <span className="bi bi-cart4"></span>
            Cart
          </button>
          <button>Login</button>
        </div>
      </header>
      <div className="productContainer">
        <div className="card">
          <img src={obj.image} alt="" />
          <p>{obj.title}</p>
          <p>{obj.description}</p>
          <button onClick={handleIncrement}>add to cart</button>
        </div>
      </div>
    </>
  );
}

export default Header;
