import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);

  function validateName(e) {
    const name = e.target.value;
    if (name.length < 2) {
      setIsValid(true);
    } else {
      setIsValid(false);
      setName(name);
    }
  }

  // sending the valid form to backend
  async function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) {
      const data = {
        name: name,
      };

      const res = await fetch("URL", {
        method: "Post",
        headers: {
          "content-type": "application/json",
        },
        data,
      });

      const d = await res.json();
      console.log(d);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Username" onChange={validateName} />

      <button>submit</button>
      {/* Conditional Rendering */}
      {isValid ? <div className="error">Name Not Valid</div> : ""}

      <output>{name}</output>
    </form>
  );
}
