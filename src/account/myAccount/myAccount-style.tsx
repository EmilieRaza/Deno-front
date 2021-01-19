import { Theme, createStyles } from '@material-ui/core/styles';

export type myAccountStyles = ("container" |"gridTopUser"|"titre"| "h1" | "h2" |"hr2"| "hr" | "right" | "h1" | "left" | "containerUser" | "ul" | "btnUpdateUser" | "input" | "userAvatar" |"li" |'fonttext'); // add class create

// eslint-disable-next-line
export default (theme: Theme) => createStyles<myAccountStyles, {}>({
    fonttext:{
        color:'white',
    },
    input: {
        display: 'none',
    },
    gridTopUser:{
        marginTop:'10px',
        
    },
    titre: {
        marginTop: '40px',
        paddingLeft: '5%',
    },
    h2:{
        marginBottom:'30px'
    },
    hr: {
        border: '5px solid black',
        color:'black',
        borderRadius: '5px',
        width: '90%',
    },
    hr2:{
        border: '2px solid white',
        color:'white',
        borderRadius: '5px',
        width: '90%',
    },
    container: {
        backgroundColor:'',
        marginLeft:'10%',
        // marginRight:'10%',
        marginTop: '50px',
        width: '90%'
    },
    right: {
    },
    h1: {
        paddingTop: '20px',
        color: 'white',
        textAlign: 'center',
    },
    left: {

    },
    containerUser: {
        backgroundColor:'black',
        borderRadius: '20px',
        height: '500px',
    },
    ul: {
        listStyle:'none',
        color: 'white',
        fontsize: '20px',
    },
    li:{
        paddingBottom: '10px'
    },
    btnUpdateUser: {
        textAlign:'center',
        marginTop: '200px', 
        marginLeft: '100px',
        backgroundColor: 'black',
        borderRadius: '60px',
        width: '70%',
        height: '100px',
        fontSize: '20px',
        alignItems:'center',
        margin:'auto 0'
    },
    userAvatar:{
        height:'100px', 
        width: '100px',
        borderRadius: '50%'
    }


});
    

