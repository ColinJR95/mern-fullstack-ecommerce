import React from 'react';
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout"
import Login from './Login'

function App() {
    return (
        //BEM
        <div className="app">



       <Router>
  
      <Switch>
          <Route path="/checkout">  
                 <Header />
                 <Checkout/>
          </Route>
          <Route path="/login">  
            <Login />
          </Route>
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