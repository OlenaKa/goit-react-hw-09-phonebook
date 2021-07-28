import "./App.css";

import { Route, Switch } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import routes from "./routes";
// import HomeView from "./views/HomeView"
// import RegisterView from "./views/RegisterView"
// import ContactsView from "./views/ContactsView"
// import LoginView from "./views/LoginView"
import Navigation from "./Components/Navigation/Navigation";
import UserMenu from "./Components/UserMenu/UserMenu";
import Spinner from "./Components/Spinner";

import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, selectors } from "./redux/authentification";

const HomeView = lazy(
  () => import("./views/HomeView.js") /* webpackChunkName: "home-view"*/
);
const ContactsView = lazy(
  () => import("./views/ContactsView.js") /* webpackChunkName: "contacts-page"*/
);
const LoginView = lazy(
  () => import("./views/LoginView.js") /* webpackChunkName: "login-page"*/
);
const RegisterView = lazy(
  () => import("./views/RegisterView.js") /* webpackChunkName: "register-page"*/
);

export default function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectors.getIsLoggedIn);

  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

  return (
    <>
      <div className="navbar">
        <Navigation />
        {isAuthenticated && <UserMenu />}
      </div>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <PrivateRoute exact path={routes.contacts} redirectTo={routes.login}>
            <ContactsView />
          </PrivateRoute>
          <PrivateRoute path={routes.user} redirectTo={routes.login}>
            <ContactsView />
          </PrivateRoute>

          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.user}
          >
            <RegisterView />
          </PublicRoute>
          <PublicRoute path={routes.login} restricted redirectTo={routes.user}>
            <LoginView />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
}
