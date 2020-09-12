import React from 'react';
import { HashRouter as DefaultRouter, Switch, Route } from "react-router-dom";
import Testing from './Testing'
var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const App = () => {
  return (
    <DefaultRouter history={history}>
      Header
      <hr/>
      <Switch>
        <Route exact path="/" component={() => {return <>Home</>}} />
        <Route exact path="/login" component={() => {return <>Login</>}} />
        <Route exact path="/testing" component={Testing} />
      </Switch>
      <hr/>
      Footer
    </DefaultRouter>
  );
}

export default App;
