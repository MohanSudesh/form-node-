import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import NavigationIcon from '@material-ui/icons/Navigation'
import CardGiftcard from '@material-ui/icons/CardGiftcard'
import CastForEducation from '@material-ui/icons/CastForEducation'
import CollectionsBookmark from '@material-ui/icons/CollectionsBookmark'
import background from '../../assets/background.png'
import photo from '../../assets/photo.png'
import Footer from '../Footer'
import { withStyles } from '@material-ui/styles'
import * as ROUTES from '../../constants/routes'

const styles = theme => ({
    background: {
        background : "-moz-linear-gradient(-0.75% 93.07% 25.51deg,rgba(100, 192, 253, 1) 0%,rgba(87, 137, 250, 1) 53.91%,rgba(70, 65, 245, 1) 100%)",
        background : "-webkit-linear-gradient(25.51deg, rgba(100, 192, 253, 1) 0%, rgba(87, 137, 250, 1) 53.91%, rgba(70, 65, 245, 1) 100%)",
        background : "-webkit-gradient(linear,-0.75% 93.07% ,95.62% 11.29% ,color-stop(0,rgba(100, 192, 253, 1) ),color-stop(0.5391,rgba(87, 137, 250, 1) ),color-stop(1,rgba(70, 65, 245, 1) ))",
        background : "-o-linear-gradient(25.51deg, rgba(100, 192, 253, 1) 0%, rgba(87, 137, 250, 1) 53.91%, rgba(70, 65, 245, 1) 100%)",
        background : "-ms-linear-gradient(25.51deg, rgba(100, 192, 253, 1) 0%, rgba(87, 137, 250, 1) 53.91%, rgba(70, 65, 245, 1) 100%)",
        background : "linear-gradient(64.49deg, rgba(100, 192, 253, 1) 0%, rgba(87, 137, 250, 1) 53.91%, rgba(70, 65, 245, 1) 100%)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        width: "100vw",
        [theme.breakpoints.down('md')]: {
            height: 'auto',
        }
    },
    background2: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#fff",
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4)
        }
    },
    background3: {
        height: "100vh",
        background : "-moz-linear-gradient(0.88% 93.09% 26.26deg,rgba(0, 255, 223, 1) 0%,rgba(0, 246, 222, 1) 9.76%,rgba(0, 220, 221, 1) 25.98%,rgba(0, 179, 218, 1) 46.55%,rgba(0, 156, 217, 1) 56.74%,rgba(0, 118, 193, 1) 86.52%)",
        background : "-webkit-linear-gradient(26.26deg, rgba(0, 255, 223, 1) 0%, rgba(0, 246, 222, 1) 9.76%, rgba(0, 220, 221, 1) 25.98%, rgba(0, 179, 218, 1) 46.55%, rgba(0, 156, 217, 1) 56.74%, rgba(0, 118, 193, 1) 86.52%)",
        background : "-webkit-gradient(linear,0.88% 93.09% ,106.57% 0.37% ,color-stop(0,rgba(0, 255, 223, 1) ),color-stop(0.0976,rgba(0, 246, 222, 1) ),color-stop(0.2598,rgba(0, 220, 221, 1) ),color-stop(0.4655,rgba(0, 179, 218, 1) ),color-stop(0.5674,rgba(0, 156, 217, 1) ),color-stop(0.8652,rgba(0, 118, 193, 1) ))",
        background : "-o-linear-gradient(26.26deg, rgba(0, 255, 223, 1) 0%, rgba(0, 246, 222, 1) 9.76%, rgba(0, 220, 221, 1) 25.98%, rgba(0, 179, 218, 1) 46.55%, rgba(0, 156, 217, 1) 56.74%, rgba(0, 118, 193, 1) 86.52%)",
        background : "-ms-linear-gradient(26.26deg, rgba(0, 255, 223, 1) 0%, rgba(0, 246, 222, 1) 9.76%, rgba(0, 220, 221, 1) 25.98%, rgba(0, 179, 218, 1) 46.55%, rgba(0, 156, 217, 1) 56.74%, rgba(0, 118, 193, 1) 86.52%)",
        background : "linear-gradient(63.74deg, rgba(0, 255, 223, 1) 0%, rgba(0, 246, 222, 1) 9.76%, rgba(0, 220, 221, 1) 25.98%, rgba(0, 179, 218, 1) 46.55%, rgba(0, 156, 217, 1) 56.74%, rgba(0, 118, 193, 1) 86.52%)",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(10),
        color: "white",
        flexDirection: "row",
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            padding: theme.spacing(4),
            flexDirection: "column-reverse",
        }
    },
    main: {
        color: "white",
        paddingLeft: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            padding: theme.spacing(3),
            paddingTop: theme.spacing(10),
        }
    },
    title: {
        fontWeight: 900,
        [theme.breakpoints.down('md')]: {
            fontSize: "28px"
        }
    },
    title2: {
        [theme.breakpoints.down('md')]: {
            fontSize: "28px",
            textAlign: "center",
        }
    },
    margin: {
        marginLeft: theme.spacing(3)
    },
    fab: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginTop: theme.spacing(6),
        flexGrow: 1,
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(3),
        }
    },
    center: {
        textAlign: "center",
    },
    icons: {
        fontSize: theme.spacing(5)
    },
    icons2: {
        fontSize: theme.spacing(2)
    },
    fab2: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        margin: theme.spacing(1),
        flexGrow: 1,
    },
    tasks: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    photo: {
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5)
        }
    },
    bulbImage: {
        [theme.breakpoints.down('md')]: {
            width: "90%",
            marginTop: theme.spacing(3)
        }
    },
    title4: {
        [theme.breakpoints.down('md')]: {
            fontSize: "24px"
        }
    },
    terms: {
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1),
            paddingTop: 0,
        }
    },
    listItem: {
        marginBottom: theme.spacing(1)
    },
    innerList: {
        listStyleType: "upper-roman",
    },
    grid3: {
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: "column-reverse",
        }
    }
})

const LandingPage = ({ classes }) => {
    return (
        <Fragment>
            <div  className={classes.background}> 
                <Grid container>
                    <Grid item xs={12} lg={6} className={classes.main}>
                        <Typography variant="h4" className={classes.title}>
                            Campus Ambassador Programme
                        </Typography>
                        <br/>
                        <hr style={{ height: "2px", backgroundColor: "white", width: "100%"}}  />
                        <br/>
                        <Typography variant="subtitle1">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A unique platform for you to showcase
                            as well as improve your communication, marketing and social skills. Offering a plethora of engaging activities which give you a hands-on
                            experience in digital marketing, publicity and event management like never
                            before.                        
                        </Typography>
                        <br/>
                        <Fab variant="extended" color="primary" aria-label="Add" component={Link} to={ROUTES.SIGN_UP}>
                            <NavigationIcon className={classes.extendedIcon} />
                            Get Started
                        </Fab>
                        <Fab variant="extended" aria-label="Add" className={classes.margin} href="#learnMore">
                            Learn More
                        </Fab>
                    </Grid>
                    <Grid item lg={1}></Grid>
                    <Grid item xs={12} lg={5} align="center" className={classes.photo}>
                        <img src={photo} width="250" alt=""/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.background2}>
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Typography variant="h4" className={classes.title2}>
                            What’s in store for you?
                        </Typography>
                        <br/>
                        <hr style={{ height: "2px", backgroundColor: "white", width: "100%"}}  />
                        <br/>
                        <Typography display="inline">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A unique opportunity to represent Shaastra, IIT Madras at their institute.CAs get to work closely with the team behind the world’s first ISO certified
                            technical fest and one of the largest in the country. <strong>Absolutely sui generis!</strong><br/><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Shaastra CA program acts as a marketing internship, which entails you to
                            receive a
                            marketing internship certificate. You also stand a chance to receive other
                            incentives based on
                            your performance. The incentives include:

                        </Typography>
                        <Grid container>
                            <Grid item xs={12} lg={4} className={classes.center}>
                                <Fab variant="round" color="primary" aria-label="Add" className={classes.fab}>
                                    <CastForEducation className={classes.icons} />
                                </Fab>
                                <br/><br/>
                                <Typography variant="h6">
                                    Direct Internships
                                </Typography>
                                <Typography variant="subtitle1">
                                    For top 15 best performing CAs.                                
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={4} className={classes.center}>
                                <Fab variant="round" color="primary" aria-label="Add" className={classes.fab}>
                                    <CardGiftcard className={classes.icons} />
                                </Fab>
                                <br/><br/>
                                <Typography variant="h6">
                                    Sponsored stay at IIT Madras
                                </Typography>
                                <Typography variant="subtitle1">
                                    Free workshops / events and Shaastra Passport.                                
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={4} className={classes.center}>
                                <Fab variant="round" color="primary" aria-label="Add" className={classes.fab}>
                                    <CollectionsBookmark className={classes.icons} />
                                </Fab>
                                <br/><br/>
                                <Typography variant="h6">
                                    Internship Certificate
                                </Typography>
                            </Grid>
                        </Grid>
                        <br/>
                    </Grid>
                </Grid>
            </div>
            <div id="learnMore" className={classes.background3}>
                <Grid container className={classes.grid3}>
                    <Grid item xs={12} lg={5} className={classes.center}>
                        <img src={background} className={classes.bulbImage} alt=""/>
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <Typography variant="h4">
                            How does it work ?
                        </Typography>
                        <br/>
                        <hr style={{ height: "2px", backgroundColor: "white", width: "100%"}}  />
                        <br/>
                        <Typography variant="body1" classeName={classes.tasks}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CAs are assigned a range of tasks from time to time. &nbsp;These tasks range from sharing posts on social media platforms to organizing workshops.
                            Every task carries a fixed number of points, which are awarded upon completion of the task. <br/>
                        </Typography>
                        <br/>
                        <Typography variant="body1"  classeName={classes.tasks}>
                            For example: One post shared on Facebook can give the CA one point.
                        </Typography>
                        <br/>
                        <Typography variant="body1" className={classes.tasks}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tasks which require more effort like conducting on-ground publicity shall fetch higher points.
                            CAs are required to complete a fixed minimum number of points to receive the internship certificate.
                        </Typography>
                        <br/>
                        <br/>
                        <Typography variant="h6" className={classes.tasks}>
                            Those who grab extra points will be eligible to receive additional incentives such as exclusive Shaastra branded goodies.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.background2} id="termsAndConditions">
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Typography variant="h4" className={classes.title4}>
                            Terms And Conditions
                        </Typography>
                        <hr style={{ height: "2px", backgroundColor: "white", width: "100%"}}  />
                        <Typography>
                            <ol className={classes.terms}>
                                <li className={classes.listItem}>
                                    The CA will be a part of the organizing team of Shaastra 2020 and he/she must ensure that his/her college has no objection to this.
                                </li>
                                <li className={classes.listItem}>
                                    Shaastra will not be responsible for any issues arising due to objection of college authorities in the later stage.
                                </li>
                                <li className={classes.listItem}>
                                    The internship certificate will only be provided subject to completion of fixed minimum points.
                                </li>
                                <li className={classes.listItem}>
                                    Shaastra reserves the right to change the points awarded for every task and minimum points required for the certificate as well as bonus incentives and goodies.
                                </li>
                                <li className={classes.listItem}>
                                    Tasks allotted to CAs will include, but not be limited to: <br/>
                                    <ol className={classes.innerList}>
                                        <li className={classes.listItem}>Putting up posters.</li>
                                        <li className={classes.listItem}>Sharing posts put up by the Shaastra Facebook page.</li>
                                        <li className={classes.listItem}>Sending mails for publicity.</li>
                                        <li className={classes.listItem}>Getting MoUs signed.</li>
                                        <li className={classes.listItem}>Getting participants through referrals.</li>
                                        <li className={classes.listItem}>Taking care of organizational aspects of events including facilities and requirements.</li>
                                        <li className={classes.listItem}>Visiting colleges or other public venues for carrying out on-ground publicity.</li>
                                    </ol>
                                </li>
                                <li className={classes.listItem}>
                                    All official communication will be done via the CA portal and email. It is the responsibility of the CA to check his/her email and the CA portal regularly and acknowledge the tasks assigned to him/her.
                                </li>
                                <li className={classes.listItem}>
                                    Should there be any discrepancies or issues, the decision taken by Shaastra shall be final and binding.
                                </li>    
                            </ol>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default withStyles(styles)(LandingPage)