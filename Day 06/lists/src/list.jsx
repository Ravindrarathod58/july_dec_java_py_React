import { useState } from "react";
import Loader from "./loader.jsx";
function List({ fruits }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div className="position-relative">
      {isLoading ? (
        <Loader />
      ) : (
        <ol>
          {fruits.map((item) => (
            <li key={item.id}>
              {item.name}

              <button
                className="btn btn-primary"
                onClick={() => {
                  setIsVisible(true);
                  setCurrent(item.id);
                  setName(item.name);
                }}
              >
                update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  remove(item.id);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      )}
      {isVisible && (
        <div className="position-absolute top-0 min-vh-100 border w-100 bg-secondary d-flex justify-content-center align-items-center">
          <div>
            <h4>Enter the value to update</h4>
            <input
              type="text"
              className="form-control w-100"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              className="btn btn-success"
              onClick={() => {
                setIsVisible(false);
                update();
              }}
            >
              update value
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
