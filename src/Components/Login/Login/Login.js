import React, {useContext} from 'react';
import loginImage from '../../../images/Group 140.png';
import './Login.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {UserContext} from "../../../App";
import {useHistory, useLocation} from "react-router-dom";
import firebase from "firebase/compat";
import firebaseConfig from "../../firebaseConfig";
const provider = new GoogleAuthProvider();
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    // const location = useLocation();
    // const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
   const handleGoogleAuth = () => {
       const auth = getAuth();
       signInWithPopup(auth, provider)
           .then((result) => {
               const {displayName, email} = result.user;
               const signInUser = {name:displayName, email}
               setLoggedInUser(signInUser);
               const credential = GoogleAuthProvider.credentialFromResult(result);
               const token = credential.accessToken;
               const user = result.user;
               // ...
           }).catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           const email = error.email;
           const credential = GoogleAuthProvider.credentialFromError(error);
           // ...
       });
   }
    return (
        <main>
            <div className="login-page container">
                <div className="row align-item-center" style={{height:'100vh'}}>
                    <div className="col-md-6 shadow p-5 input-position">
                       <div className="input-group">
                           <div className="form-group">
                               <label htmlFor="">User Name</label>
                               <input type="text" className="form-control" name="name"  id=""/>
                           </div>
                           <div className="form-group">
                               <label htmlFor="">User Password</label>
                               <input type="password"  name="password" id=""/>
                           </div>
                           <div className="form-group">
                               <label className="text-danger" htmlFor="">Forget Your Password</label>
                           </div>
                           <div className="form-group mt-5 text-center">
                               <button onClick={handleGoogleAuth} className="btn btn-brand">Login</button>
                           </div>
                       </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block align-self-end img-size">
                        <img className="img-fluid" src={loginImage} alt="" srcSet=""/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;