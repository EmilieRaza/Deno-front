import React , { useState } from 'react';
import Header from './component/header/header';
import Login from './auth/login/login';
import Register from './auth/register/register';
import PasswordRecovery from './auth/pwd-recovery/pwd-recovery'
//import {ProtectedRoute, ProtectedRouteProps} from './guard/auth-gard';
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import VerifyEmail from './auth/verify-email/verify-email';
import RequestPasswordRecovery from './auth/request-pwd-recovery/request-pwd-recovery';
import Myaccount from './account/myAccount/myAccount';
import UpdateMyAccount from './account/updateMyAccount/updateMyAccount';
import { Subscriptions } from '@material-ui/icons';
//import Subscription from './subscription/Subscription';
import history from './history';
import { getCookie, setCookie } from './utils/cookie';
import { checkToken } from './utils/api';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
// si la personne n'est pas connectée, on la redirige vers l'inscription
const ProtectedRoute = ({ ...props }) => {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);

  checkToken()
    .then(() => setLoaded(true))
    .catch(() => {
      // suppression des cookies + redirection accueil si le token n'est pas bon
      setCookie('token', '', 0);
      setCookie('email', '', 0);
      history.replace('/');
      setLoaded(true);
    });
  // s'il n'y a pas de cookie token, on redirige la personne
  return !getCookie('token') ? (
    <Redirect to='/' />
  ) : // si il a un cookie token et que le token est bon après la réponse serveur on rend le composant demandé
  loaded ? (
    <>
      <Header.Display />
      <Route {...props} />
    </>
  ) : (
    // on affiche une page d'attente en attendant la réponse
    <>
      <Header.Display />
      <div style={{ height: '71.4vh' }}>
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color='inherit' />
        </Backdrop>
      </div>
    </>
  );
};


/*const defaultProtectedRouteProps: ProtectedRouteProps = {
  isAuthenticated: true,
  authenticationPath: '/login',
};*/


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
                <Route exact={true} path="/payement">
                   { /* <Subscription.Display /> */}
                </Route>
                <Route exact={true} path="/request-password-lost">
                    <RequestPasswordRecovery.Display />
                </Route>
                <Route exact={true} path="/password-lost">
                    <PasswordRecovery.Display />
                </Route>
                          {/* ROUTES NECESSITANT D'ETRE CONNECTE */}
                <ProtectedRoute exact={true} path='/' component={Login.Display}/>
                <Route path="*">
                    <Login.Display />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;