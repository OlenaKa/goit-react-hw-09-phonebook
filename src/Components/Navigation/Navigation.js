import "./Navigation.css";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { useSelector } from "react-redux";
import { selectors } from "../../redux/authentification";

export default function Navigation() {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);
  return (
    <ul className="navigation">
      <li>
        <NavLink
          exact
          to={routes.home}
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Home
        </NavLink>
      </li>
      {!isLoggedIn ? (
        <>
          <li>
            <NavLink
              exact
              to={routes.register}
              className="NavLink"
              activeClassName="NavLink_active"
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={routes.login}
              className="NavLink"
              activeClassName="NavLink_active"
            >
              Login
            </NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            exact
            to={routes.contacts}
            className="NavLink"
            activeClassName="NavLink_active"
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
}
