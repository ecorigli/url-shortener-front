import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Domains from "./components/domains/Domains";

import DomainState from "./context/domains/domainState";
import AlertState from "./context/alerts/alertState";
import AuthState from "./context/autenticacion/authState";
import authenticate from "./config/token";

const token = localStorage.getItem("token");
if (token) {
  authenticate(token);
}

function App() {
  return (
    <DomainState>
      <AlertState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/new-account" component={NewAccount} />
              <Route exact path="/domains" component={Domains} />
            </Switch>
          </Router>
        </AuthState>
      </AlertState>
    </DomainState>
  );
}

export default App;
