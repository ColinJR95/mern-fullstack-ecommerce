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
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'


const promise = loadStripe('pk_test_51HoOFvGw31QU3puGLv52AxXwQYARz8XugxwP4yOnXBaff7HY8iqmrMZtzsiXyF8yVXwEq7ACX3Arf6nUaiIuaQk700xo8uFExl');

function App() {
  // bem 
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
            // the user is logged out right now needs t0 set user 
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
          <Route path="/payment">
             <Header />
          <Elements stripe={promise}>
             <Payment />
          </Elements>
     
          
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