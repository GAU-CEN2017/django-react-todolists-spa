import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";

import TodoToday from "./components/TodoToday";
import NotFound from "./components/NotFound";
import './App.css';

let store = createStore(todoApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={TodoToday} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
