import React from 'react';
import { HashRouter as DefaultRouter, Switch, Route } from "react-router-dom";
import ViewFormTesting from './ViewFormTesting'
import CreateFormTesting from './CreateFormTesting'

const App = () => {
  return (
    <DefaultRouter>
      Header
      <hr/>
      <Switch>
        <Route exact path="/" component={() => {return <>Home</>}} />
        <Route exact path="/login" component={() => {return <>Login</>}} />
        <Route exact path="/view-testing" component={ViewFormTesting} />
        <Route exact path="/create-testing" component={CreateFormTesting} />
      </Switch>
      <hr/>
      Footer
    </DefaultRouter>
  );
}

export default App;
