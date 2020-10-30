import React from 'react';
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout"

function App() {
    return (
        //BEM
        <div className="app">



       <Router>
       <Header />
      <Switch>
        <Route path="/checkout">  
        <Checkout/>
        </Route>
        <Route path="/">
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