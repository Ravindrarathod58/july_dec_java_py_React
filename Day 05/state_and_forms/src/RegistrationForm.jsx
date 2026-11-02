import { useState } from "react";
function Registration() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      name: userName,
      email: email,
      password: password,
    };

    const res = await fetch("URL", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body,
    });

    const d = await res.json();
    console.log(d);
  }
  function addValues(e) {
    const val = e.target;
    if (val.id === "displayName") {
      if (val.value.length < 2) {
        e.target.style.border = "1px solid red";
        setError(true);
      } else {
        e.target.style.border = "1px solid rgba(236, 234, 234, 0.3)";
        setError(false);
        setUserName(e.target.value);
      }
    }
    if (val.id === "email") {
      if (val.value.length < 2) {
        e.target.style.border = "1px solid red";
        setError(true);
      } else {
        e.target.style.border = "1px solid rgba(236, 234, 234, 0.3)";
        setError(false);
        setUserName(e.target.value);
      }
    }
  }
  return (
    <div className="form-container">
      <div className="branding">
        <img src="../src/assets/image.png" alt="" />
        <span className="title">Join NexCode</span>
        <span>start your coding journey today</span>
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="displayName">Display Name</label>
          <input type="text" id="displayName" onChange={addValues} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>
        <div className="form-control">
          <label htmlFor="conf_pass">Confirm Password</label>
          <input type="text" id="conf_pass" />
        </div>
        <div className="form-control">
          <button>Create Account</button>
        </div>
      </form>
      <div className="sign-in">
        <span>Already have an account?</span>
        <span style={{ color: "blue" }}>Sign in</span>
      </div>
    </div>
  );
}
export default Registration;
