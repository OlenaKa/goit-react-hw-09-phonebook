import Button from "react-bootstrap/Button";
import { useState } from "react";
import { authOperations } from "../redux/authentification";
import { useDispatch } from "react-redux";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePass = (e) => setPass(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.addUser({ name, email, password }));
  };

  return (
    <div>
      <h1>Registration page</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
          <div className="label-text">Name</div>
        </label>

        <label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <div className="label-text">E-mail</div>
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

        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}
