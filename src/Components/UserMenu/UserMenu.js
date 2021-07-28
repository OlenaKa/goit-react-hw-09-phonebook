import Button from "react-bootstrap/Button";
import "./UserMenu.css";
import { useDispatch } from "react-redux";
import { selectors } from "../../redux/authentification";
import { authOperations } from "../../redux/authentification";
import { useSelector } from "react-redux";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectors.getUser);

  const logout = () => dispatch(authOperations.logout());

  return (
    <div className="user-menu-container">
      <p>Wellcome, {user.name}!</p>
      <p> {user.email} </p>
      <Button type="button" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
