import React from 'react';
import logo from './logo.svg';

// Views
import Todos from "./views/Todo/TodosContainer.jsx";
import Revitalize from "./views/Revitalize";


// Apollo
import { ApolloProvider } from "@apollo/react-hooks";
import { todoClient, revitalizeClient } from "./config/apollo.js";


class App extends React.Component {
  state = { 
    selectedDog: null,
  };
  
  onDogSelected = ({ target }) => {
    this.setState(() => ({ selectedDog: target.value }));
  };


  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ApolloProvider client={todoClient}>
          <Todos />
        </ApolloProvider>

        <a href="https://revitalize-production.herokuapp.com/auth/google">Click to join!</a>
        
        <ApolloProvider client={revitalizeClient}>
          <Revitalize />
        </ApolloProvider>
      </div>
    )
  }
}


export default App;

