import { Theme, createStyles } from '@material-ui/core/styles';

export type RequestPasswordRecoveryStyles = ("center" | "back" | "container" | "form" | "mainDiv" 
| "img" | "text" | "subtitle" | "link"); // add class create

// eslint-disable-next-line
export default (theme: Theme) => createStyles<RequestPasswordRecoveryStyles, {}>({
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
    container: {
        height: '100vh',
    },
    form: {
        width: '30%', // Fix IE 11 issue.
        marginTop: '-2rem',
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
    text: {
        marginTop : '-9rem',
        color: 'white',
        fontSize : '24px',
        '& span' : {
            color: '#143eda'
        }
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
    }
});
    

