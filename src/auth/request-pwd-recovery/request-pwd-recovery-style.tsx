import { Theme, createStyles } from '@material-ui/core/styles';

export type passwordRecoveryStyles = ("center" | "form" | "back" | "mainDiv" | "img" | "container"
| "link" | "subtitle" | "passwordLost" | "text"); // add class create

// eslint-disable-next-line
export default (theme: Theme) => createStyles<passwordRecoveryStyles, {}>({
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    back: {
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
    },
    form: {
        borderRadius: '10px',
        background: 'linear-gradient(#11998e, #38ef7d)',
        padding: '30px',
        width: '30%', // Fix IE 11 issue.
        textAlign:'center'
    },
    mainDiv: {
        height: '100vh',
        borderRight: '1px solid white'
    },
    img: {
        marginTop: '-7rem',
        width: '300px'
    },
    container: {
        height: '100vh',
    },
    link: {
        color: 'white',
        textDecoration: 'underline',
        '&:hover' : {
            color: '#ADADAE'
        }
    },
    subtitle: {
        color: 'white',
        marginTop: '4rem',
    },
    passwordLost: {
        marginTop: '0.5rem',
        textAlign: 'right',
    },
    text: {
        color: 'white',
        fontSize : '24px',
        '& span' : {
            color: '#143eda'
        }
    }
});
    

