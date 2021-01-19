import { Theme, createStyles } from '@material-ui/core/styles';

export type registerStyles = ("center" | "form" | "back" | "mainDiv" | "img" | "container"
| "link" | "subtitle" | "passwordLost"); // add class create

// eslint-disable-next-line
export default (theme: Theme) => createStyles<registerStyles, {}>({
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
        background: 'linear-gradient(#11998e, #38ef7d)',
        padding: '30px',
        width: '30%', // Fix IE 11 issue.
        marginTop: '20px',
        textAlign:'center',
        '&:hover' : {
        backgroundColor:'orange'
    }
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
    }
});
    

