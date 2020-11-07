import React from 'react';
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout"
import Login from './Login'
import { auth } from "./firebase";
import {useEffect} from 'react';
import {useStateValue} from './StateProvider';


function App() {
    const [{}, dispatch] = useStateValue();
   
    useEffect(() => {
// will run ones the app components loads....
        auth.onAuthStateChanged(authUser => {
          console.log('this is the user ', authUser);

          if(authUser) {
            // the user is logged in

            dispatch({
              type: 'SET_USER',
              user: authUser
            })
          } else {
            // the user is logged out right now
            dispatch({
              type: 'SET_USER',
              user: null
            })
          }
        })



    }, [])

    return (
        /* BEM */
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

    </div>
    );
}

export default App;