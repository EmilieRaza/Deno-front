import React from 'react';
import styles, { loginStyles } from './login-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Alert, AlertProps } from '@material-ui/lab';
import {Grid, Snackbar} from '@material-ui/core';
import history from '../../history';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link ,Redirect} from 'react-router-dom';
import { login } from '../../utils/api';
import { setCookie, getCookie } from '../../utils/cookie';
import axios from 'axios';

interface P {}
interface S {
    email: string;
    password: string;
    message: string;
    open: boolean;
    severity: AlertProps['severity'];
}

export default class Login extends React.PureComponent<P & WithStyles<loginStyles>, S> {
    public static Display = withStyles(styles as any)(Login) as React.ComponentType<P>
    public state: Readonly<S> = { email: '', password: '', message: '', open: false, severity: 'success' };
    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await login(this.state);
      setCookie('token', data.token, 1);
      setCookie('email', this.state.email, 1);
      // ajout du token dans les requetes http
      axios.defaults.headers = {
        authorization: `Baerer ${data.token}`,
      };
      history.push('/register');
    } catch (error) {
      console.error(error);
      this.setState({ open: true, severity: 'error', message: error.response.data.error });
    }
    };
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value,
        }));
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    render () {
        const { classes } = this.props;
        if (getCookie('token')) return <Redirect to='/tableau-de-bord' />;
        const { severity, message, open } = this.state;
            return (
            <div className={classes.back + ' ' + classes.center}>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    autoHideDuration={6000}
                    open={open}
                    onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity={severity}>
                        {message}
                    </Alert>
                </Snackbar>
            <Grid container className={classes.container}>
                <div className={classes.center + ' ' + classes.div1}>
                    <Grid item xs={12} className={classes.center}>
                        <Grid container >
                                <Grid item xs={12} className={classes.center} >
                                    <form className={classes.form} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                                        <InputEmail id="outlined-basic" name='email' type='email' label="EMAIL" variant="outlined" value={this.state.email} onChange={this.handleChange}/>
                                        <InputPassword id="outlined-basic" name='password' type='password' label="MOT DE PASSE" variant="outlined" value={this.state.password} onChange={this.handleChange}/>
                                        <div className={classes.passwordLost}>
                                            <Link to="/request-password-lost" className={classes.link}>Mot de passe oublié ?</Link>
                                        </div>
                                        <LoginButton>Connexion</LoginButton>
                                    </form>
                                </Grid>
                                <Grid item xs={12} className={classes.center}>
                                    <span className={classes.subtitle}>Vous n'avez pas encore de compte ? <Link to="/register" className={classes.link}>Inscrivez-vous</Link></span> 
                                </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.ondeBg}>

                </div>
            </Grid>
            {/* <Grid container className={classes.container}>
                <Grid item xs={6} className={classes.leftSide + ' ' + classes.center}>
                    <Grid container>
                        <Grid item xs={12} className={classes.center}>
                             <img className={classes.img} src={logo2} alt=""/> 
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <form className={classes.form} noValidate autoComplete="off">
                                <InputEmail id="outlined-basic" label="EMAIL" variant="outlined" />
                                <InputPassword id="outlined-basic" label="PASSWORD" variant="outlined" />
                                <div className={classes.passwordLost}>
                                    <Link to="/request-password-lost" className={classes.link}>Mot de passe oublié ?</Link>
                                </div>
                                <LoginButton>Connexion</LoginButton>
                            </form>
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <span className={classes.subtitle}>Vous n'avez pas encore de compte ? <Link to="/register" className={classes.link}>Inscription</Link></span> 
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} className={classes.rightSide + ' ' + classes.center}>
                </Grid>
            </Grid> */}
            
            </div>
        );
    }
}

const InputEmail = withStyles({
    root: {
        width:'100%',
        marginBottom:'2rem',
        color:'white',
        '& input': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '&:hover label': {
            color: '#ADADAE',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                borderRadius: '10px',
            },
            '&:hover fieldset': {
            borderColor: '#ADADAE',
            },
            '&.Mui-focused fieldset': {
            borderColor: 'white',
            },
        },
    },
})(TextField);


const InputPassword = withStyles({
    root: {
        width:'100%',
        color:'white',
        '& input': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '&:hover label': {
            color: '#ADADAE',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                borderRadius: '10px',
            },
            '&:hover fieldset': {
            borderColor: '#ADADAE',
            },
            '&.Mui-focused fieldset': {
            borderColor: 'white',
            },
        },
    },
})(TextField);

const LoginButton = withStyles({
    root: {
        color: 'black',
        backgroundColor:'white',
        marginTop: '2rem',
        border: 'none',
        width: '100%',
        height: '60px',
        fontSize:'25px',
        borderRadius: '10px',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: '#ADADAE',
        },
    },
})(Button);
