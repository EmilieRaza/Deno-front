import React from 'react';
import styles, { myAccountStyles } from './myAccount-style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
interface P {}
interface S {}

export default class MyAccount extends React.PureComponent<P & WithStyles<myAccountStyles>, S> {

    public static Display = withStyles(styles as any)(MyAccount) as React.ComponentType<P>
    
    render () {
        const { classes } = this.props;
            return (
            <div >
            <h1 className={classes.titre}>MON COMPTE</h1>
            <hr className={classes.hr}></hr>
            <Grid container className={classes.container}>
                <Grid item xs={5}>
                    <Container className={classes.containerUser}>
                        <Grid container>
                            <Grid item xs={6} className={classes.gridTopUser}>
                                </Grid>
                            <Grid item xs={6}>
                                <Typography className={classes.fonttext} gutterBottom variant="h5" component="h2">
                                    
                                    <h1 className={classes.h1}>USER NAME</h1>
                                </Typography>
                            </Grid>
                    </Grid>
                    <hr className={classes.hr2}></hr>
                        <Typography className={classes.fonttext} gutterBottom variant="h5" component="h2">
                        <ul className={classes.ul}>
                        <h2 className={classes.h2}>Inscrit le : jj/mm/aaaa</h2>
                            <li className={classes.li}>Nom: <a>XXXXXXXX</a></li>
                            <li className={classes.li}>Prénom: <a>XXXXXXXX</a></li>
                            <li className={classes.li}> Téléphone: <a>XXXXXXXX</a></li>
                            <li className={classes.li}> Email: <a>XXXXXXXX</a></li>
                        </ul>
                        </Typography>

                    </Container>
                </Grid>
                <Grid item xs={7}>
                     <Button  className={classes.btnUpdateUser} variant="contained" color="primary" disableElevation> Mettre à jours mes informations</Button>
                </Grid>
            </Grid>
            </div>
        );
    }
}
