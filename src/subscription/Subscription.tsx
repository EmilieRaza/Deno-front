import React from 'react';
import styles, { loginStyles } from './subscription-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


{/* 
interface P {}
interface S {}

export default class Subscription extends React.PureComponent<P & WithStyles<loginStyles>, S> {
    public static Display = withStyles(styles as any)(Subscription) as React.ComponentType<P>

     handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        // Block native form submission.
        event.preventDefault();
        const stripe = useStripe();
        const elements = useElements();
      
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
    
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement:any = elements.getElement(CardElement);
    
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });
    
        if (error) {
          console.log('[error]', error);
        } else {
          console.log('[PaymentMethod]', paymentMethod);
        }
      };
    render () {
        const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

        const { classes } = this.props;
            return (
            <div className={classes.back + ' ' + classes.center}>
            <Grid container className={classes.container}>
                
                <div className={classes.center + ' ' + classes.div1}>
                    <Grid item xs={12} className={classes.center}>
                        <Grid container >
                                <Grid item xs={12} className={classes.center} >
                                    <form className={classes.form} noValidate autoComplete="off" onSubmit={this.handleSubmit}>  
                                    <CardElement />
                                    <Elements stripe={stripePromise}>
                                    <PayButton >pay</PayButton>
                                    </Elements>
                                    </form>
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
}
const PayButton = withStyles({
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
*/}