import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Chip from '@material-ui/core/Chip'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withAuthorization } from '../../contexts/Session'
import * as ROUTES from '../../constants/routes'

const styles = theme => ({
    root: {
        marginTop: theme.spacing(12)
    },
    media: {
        height: theme.spacing(30)
    },
    performance: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    center: {
        textAlign: 'center'
    }
})

class MyProfile extends Component{

    render(){
        const { classes, authUser: { name, email, status, }, } = this.props

        return (
            <Fragment>
                <Grid container className={classes.root}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="../../assets/female_icon.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Chip label={status} style={{ float: "right" }} color="primary" className={classes.chip} />
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {email}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container className={classes.performance}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container>
                                        <Grid item xs={4} className={classes.center}>
                                            <Typography variant="h4">
                                                0
                                            </Typography>
                                            <br/>
                                            <Typography variant="h6">
                                                Tasks Assigned
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} className={classes.center}>
                                            <Typography variant="h4">
                                                0
                                            </Typography>
                                            <br/>
                                            <Typography variant="h6">
                                                Tasks Completed
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} className={classes.center}>
                                            <Typography variant="h4">
                                                0
                                            </Typography>
                                            <br/>
                                            <Typography variant="h6">
                                                Rank
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

const condition = authUser => !!authUser

export default compose(
    withAuthorization(condition, ROUTES.LOG_IN),
    withStyles(styles)
)(MyProfile)