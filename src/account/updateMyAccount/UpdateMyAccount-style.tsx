import { Theme, createStyles } from '@material-ui/core/styles';

export type updateMyAccountStyles = ("container" | "h1" |"left" | "hr" |"containerUser" | "btnAvatar" |"btnUpdateUser" | "input" | "userAvatar"|"form" | "formId" | "checked" |"a" | "alert" | "leftSucces"|"succesIcone"); // add class create

// eslint-disable-next-line
export default (theme: Theme) => createStyles<updateMyAccountStyles, {}>({
    input: {
        display: 'none',
      },
    h1: {
        marginTop: '40px',
        paddingLeft: '5%',
    },
    hr: {
        border: '5px solid black',
        color:'black',
        borderRadius: '5px',
        width: '90%',
    },
    container: {
        marginRight:'10%',
        marginTop: '70px',
        backgroundColor: '',
    },

    containerUser: {
        paddingTop:'100px',
        backgroundColor:'black',
        borderRadius: '20px',
        paddingBottom:'80px',
        
    },
   left:{
       backgroundColor:'',
       paddingLeft:'40px'
      
   },
   btnAvatar:{
       marginTop: '20px',
       backgroundColor:'#008ab6',
   },
//    &:hover btnAvatar: {
//     color: '#ADADAE',
// },
   btnUpdateUser: {
        textAlign:'center',
        marginTop: '50px', 
        backgroundColor: 'black',
        borderRadius: '60px',
        width: '40%',
        height: '100px',
        fontSize: '20px',
        alignItems:'center',
        margin:'auto 0'
    },
    userAvatar:{
        height:'200px', 
        width: '200px',
        borderRadius: '50%',
    },
    form:{
        
        backgroundColor:'black',
        color: 'white',
    },
    formId:{
        width:'90%',
        marginBottom: '20px',
        backgroundColor:'white',
        color: 'white',
    },
    checked:{
        // backgroundColor:'white',
        color:'white'
    },
    a:{
        textDecoration:'underline'

    },
    alert: {
        marginTop: '40px',
        float:'left',
        width:'85%',
        marginRight: '5%',
        // marginTop: '10px',
        // marginLeft: '10%',
        // marginRight: '10%',

    },
    leftSucces: {
        // backgroundColor:'orange',
        // marginRight:'10%',
    },
    succesIcone:{
        height:'40px',
        marginRight:'10px'
    }



});
    

