import React from 'react';
import Header from './component/header/header';
import Login from './auth/login/login';
import Register from './auth/register/register';
import PasswordRecovery from './auth/pwd-recovery/pwd-recovery'
import {ProtectedRoute, ProtectedRouteProps} from './guard/auth-gard';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import VerifyEmail from './auth/verify-email/verify-email';
import RequestPasswordRecovery from './auth/request-pwd-recovery/request-pwd-recovery';
import Myaccount from './account/myAccount/myAccount';
import UpdateMyAccount from './account/updateMyAccount/updateMyAccount';
import { Subscriptions } from '@material-ui/icons';

const defaultProtectedRouteProps: ProtectedRouteProps = {
  isAuthenticated: true,
  authenticationPath: '/login',
};


const App = () => { 
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/login">
                    <Login.Display />
                </Route>
                <Route exact={true} path="/register">
                    <Register.Display />
                </Route>
                <Route exact={true} path="/verify-email">
                    <VerifyEmail.Display />
                </Route>
                <Route exact={true} path="/request-password-lost">
                    <RequestPasswordRecovery.Display />
                </Route>
                <Route exact={true} path="/password-lost">
                    <PasswordRecovery.Display />
                </Route>
                <ProtectedRoute {...defaultProtectedRouteProps} exact={true} path='/' component={Login.Display}/>
                <Route path="*">
                    <Login.Display />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;