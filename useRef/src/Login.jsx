import React, { useState } from "react";

const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
const email=useRef(null);
const password=useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email.current);
    console.log("Password:", password.current);

    // optional: clear fields after submit
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        ref={email}
        required
      />

      <input
        type="password"
        ref={password}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
