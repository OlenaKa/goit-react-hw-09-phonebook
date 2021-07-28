import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/authentification";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePass = (e) => setPass(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <div className="label-text">email</div>
        </label>

        <label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePass}
          />
          <div className="label-text">Password</div>
        </label>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
