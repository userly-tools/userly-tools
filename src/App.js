import React from 'react';
import { HashRouter as DefaultRouter, Switch, Route } from "react-router-dom";
import ViewFormTesting from './ViewFormTesting'
import CreateFormTesting from './CreateFormTesting'
import Login from './containers/Login'
import Home from './containers/Home'
import ProjectContainer from './containers/Projects'
import NewProjectContainer from './containers/NewProject'
import ParticipantsContainer from './containers/Participants'
import CalendarContainer from './containers/Calendar'

const App = () => {
  return (
    <DefaultRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={ProjectContainer} />
        <Route exact path="/new-project" component={NewProjectContainer} />
        <Route exact path="/participants" component={ParticipantsContainer} />
        <Route exact path="/calendar" component={CalendarContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/view-testing" component={ViewFormTesting} />
        <Route exact path="/create-testing" component={CreateFormTesting} />
      </Switch>
    </DefaultRouter>
  );
}

export default App;
