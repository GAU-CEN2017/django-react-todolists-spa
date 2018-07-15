import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import TodoToday from "./components/TodoToday";
import NotFound from "./components/NotFound";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TodoToday} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
