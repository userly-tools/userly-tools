import React from 'react';
import { HashRouter as DefaultRouter, Switch, Route } from "react-router-dom";
import ViewFormTesting from './ViewFormTesting'
import CreateFormTesting from './CreateFormTesting'
import CustomNavbar from './components/CustomNavbar'
import Login from './containers/Login'

const App = () => {
  return (
    <DefaultRouter>
      <CustomNavbar />
      <Switch>
        <Route exact path="/" component={() => {return <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Home in progress...</div>}} />
        <Route exact path="/dashboard" component={() => {return <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Dashboard in progress...</div>}} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/view-testing" component={ViewFormTesting} />
        <Route exact path="/create-testing" component={CreateFormTesting} />
      </Switch>
    </DefaultRouter>
  );
}

export default App;
