import React from 'react';
import { HashRouter as DefaultRouter, Switch, Route } from "react-router-dom";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const App = () => {
  return (
    <DefaultRouter history={history}>
      Header
      <Switch>
        <Route exact path="/" component={() => {return <>Home</>}} />
        <Route exact path="/login" component={() => {return <>Login</>}} />
      </Switch>
      Footer
    </DefaultRouter>
  );
}

export default App;
