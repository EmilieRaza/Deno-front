import React from 'react';
import styles, { loginStyles } from './login-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
interface P {}
interface S {}

export default class Login extends React.PureComponent<P & WithStyles<loginStyles>, S> {

    public static Display = withStyles(styles as any)(Login) as React.ComponentType<P>

    public state: Readonly<S> = {
        email1: "",
        password1: "",
    };
    render () {
        const { classes } = this.props;
            return (
            <div className={classes.back + ' ' + classes.center}>
            <Grid container className={classes.container}>
                
                <div className={classes.center + ' ' + classes.div1}>
                    <Grid item xs={12} className={classes.center}>
                        <Grid container >
                                <Grid item xs={12} className={classes.center} >
                                    <form className={classes.form} noValidate autoComplete="off" onSubmit={this.login}>
                                        <InputEmail id="outlined-basic" label="EMAIL" variant="outlined" onChange={this.changeVal}/>
                                        <InputPassword id="outlined-basic" label="MOT DE PASSE" variant="outlined" onChange={this.changeVal}/>
                                        <div className={classes.passwordLost}>
                                            <Link to="/request-password-lost" className={classes.link}>Mot de passe oublié ?</Link>
                                        </div>
                                        <LoginButton type='submit'>Connexion</LoginButton>
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
            </div>
        );
    }
    changeVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        this.setState({[name]: value} as Pick<S, keyof S>)
    }

    login = (e: React.FormEvent<HTMLFormElement>) => {
       const  _email = this.state.email1.trim(); 
       const  _password = this.state.password1.trim();
        e.preventDefault() // empecher la redirection sur la même page
        const data = { // définir les data à envoyer
            email: _email,
            password: _password,
        }
        axios.post(`http://localhost:3000/login`, data)
        .then(res => {
            localStorage.setItem('currentUser', JSON.stringify(res.data)); // stock les informations de l'utilisateurs en front
            toast.success("Connexion réussie", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            setTimeout(() => {history.push('/')}, 100);
        })
        .catch(error => {
            toast.warn("Veuillez remplir tous les champs", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            console.log(error.response.data)
            
        })
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
