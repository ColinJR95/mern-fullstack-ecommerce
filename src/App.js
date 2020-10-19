import React from 'react';
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./Product"

function App() {
  return (
    //BEM
    <div className="app">



       <Router>
      <Switch>
        <Route path="/">
            <Header />
            <Home />
        </Route>
      </Switch>
    </Router>

   
   {/* Header */}
   {/* Header */}
   {/* Header */}
    </div>
  );
}

export default App;
