import './App.css';
import React, {createContext, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Components/Home/Header/Header";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Login from "./Components/Login/Login/Login";
import firebaseConfig from "./Components/firebaseConfig";
import firebase from "firebase/compat";
firebase.initializeApp(firebaseConfig);
export const UserContext = createContext();
function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
          <Route path="/appointment">
              <Appointment/>
          </Route>
              <Route path="/login">
                  <Login/>
              </Route>
              <Route exact path="/">
                  <Header/>
              </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
