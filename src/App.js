import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {home, account, decklists, viewDeck} from "./pages"
import {Navbar} from "./components"
 


function App() {

  
  return (
    <Router>
      <h1>MTG Card Search</h1>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component = {home}/>
        <Route path="/account" exact component = {account}/>
        <Route path="/decklists" exact component = {decklists}/>
        <Route path="/viewDeck/:id/:view" exact component = {viewDeck}/>
      </Switch>
    </Router>
  );
}

export default App;
