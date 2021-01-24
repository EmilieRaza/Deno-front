import { Theme, createStyles } from '@material-ui/core/styles';
import Background from   '../../assets/img/onde.png';

export type loginStyles = ("div1" | "ondeBg" | "center" | "form" | "back" |"container"
| "link" | "subtitle" | "passwordLost"); // add class create

// eslint-disable-next-line
export default (theme: Theme) => createStyles<loginStyles, {}>({
    div1:{
        marginTop:'150px',
        zIndex: 2, 
        position: 'absolute'
    },
    ondeBg: {
        marginTop:'250px',
        position: 'relative',
        height: '250px', 
        width: '100%', 
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat: 'repeat-x', 
        zIndex: 1, 
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    back: {
        backgroundColor: 'black',
        height: '100vh',
    },
    form: {

        height:'450px',
        borderRadius: '10px',
        textAlign:'center',
        background: 'linear-gradient(#38ef7d, #38ef7d)',
        // background: 'linear-gradient(#11998e, #38ef7d)',
        padding: '30px',
        paddingTop:'60px'

    },
    container: {
        height: '100vh',
        backgroundColor: 'black'
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
    

