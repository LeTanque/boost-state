import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import logo from './logo.svg';

// Views
import Todos from "./views/Todo/TodosContainer.jsx";
import Revitalize from "./views/Revitalize";


// Apollo
import { ApolloProvider } from "@apollo/react-hooks";
import { todoClient, revitalizeClient } from "./config/apollo.js";

// Component
import AuthenticateUser from "./views/Revitalize/Auth/AuthenticateUser.jsx";
import Dashboard from "./views/Revitalize/Dashboard";
import RegisterGoog from "./views/Revitalize/Auth/RegisterGoog.jsx";


class App extends React.Component {
  state = { 
    selectedDog: null,
  };
  
  onDogSelected = ({ target }) => {
    this.setState(() => ({ selectedDog: target.value }));
  };


  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <ApolloProvider client={todoClient}>
            <Todos />
          </ApolloProvider>

          <ApolloProvider client={revitalizeClient}>
            <Revitalize />

            <Route 
              exact
              path="/oauth/:token"
              component={AuthenticateUser}
            />

            <Route 
              exact
              path="/dashboard"
              component={Dashboard}
            />

            <Route 
              exact
              path="/login"
              component={Dashboard}
            />

          </ApolloProvider>
        </div>
      
      
      
      
      </BrowserRouter>
      
    )
  }
}


export default App;

