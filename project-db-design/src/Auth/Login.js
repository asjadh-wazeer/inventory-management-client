import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../Auth/firebase.config";
import { Link } from 'react-router-dom';
import googleLogo from "../logo/search.png";
import "./Login.css";
import { useNavigate, useLocation } from 'react-router';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const navigate = useNavigate();
    // const location = useLocation();

    // const { from } = location.state || { from: { pathname: "/brand" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      } else {
        firebase.app();
      }

      const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
            

        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result.user)
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            var token = credential.accessToken;
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {name: displayName, email, photoURL};
            setLoggedInUser(signedInUser);
            // history.replace(from);
            navigate('/profile')
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage);
        });
     }

    return (
        <div className="container py-5 my-xl-5">
			<div className="logo text-center">
            <h1>Inventory Management</h1>

			</div>
			<div className="d-flex align-items-center justify-content-center pb-5 my-5">
				<div className="login-register login p-md-5 p-3">
					<h4 className="mb-5">Login With</h4>
					<button className="btn btn-outline-secondary social-login" onClick={handleGoogleSignIn}>
						<img src={googleLogo} alt="" style={{ maxWidth: "28px" }} />
						Continue with Google
					</button>
					<h5 className="mt-3">
						<span>Don’t have an account?</span>
						<Link to="/login">Create an account</Link>
					</h5>
				</div>
			</div>
		</div>
    );
};

export default Login;