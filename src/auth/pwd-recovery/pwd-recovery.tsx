import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/img/logo.png';
import styles, { RequestPasswordRecoveryStyles } from './pwd-recovery-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface P {}
interface S {}

export default class RequestPasswordRecovery extends React.PureComponent<P & WithStyles<RequestPasswordRecoveryStyles>, S> {

    public static Display = withStyles(styles as any)(RequestPasswordRecovery) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
            return (
            <div className={classes.back + ' ' + classes.center}>
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.mainDiv + ' ' + classes.center}>
                    <Grid container>
                        <Grid item xs={12} className={classes.center}>
                            {/* <img className={classes.img} src={logo} alt=""/> */}
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <span className={classes.text}>Définir un nouveau mot de passe</span>
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <form className={classes.form} noValidate autoComplete="off">
                                <Input id="code" label="CODE" variant="outlined" />
                                <Input id="password" label="NOUVEAU MOT DE PASSE" variant="outlined" />
                                <Input id="confirmPassword" label="CONFIRMER LE NOUVEAU MOT DE PASSE" variant="outlined" />
                                <SubmitButton>Confirmer</SubmitButton>
                            </form>
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <span className={classes.subtitle}>Retourner à l'écran de <Link to="/login" className={classes.link}>connexion</Link></span> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        );
    }
}

const Input = withStyles({
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

const SubmitButton = withStyles({
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