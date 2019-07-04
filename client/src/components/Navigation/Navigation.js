import React, { Fragment, cloneElement, Component } from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/styles'
import { withAuthUser } from '../../contexts/Session'
import Slide from '@material-ui/core/Slide'
import Logo from '../../assets/logo.png'
import { MobileNavigation, Verzeo, ContactUs, } from './'
import * as ROUTES from '../../constants/routes'
import * as ROLES from '../../constants/roles'

const styles = theme => ({
    appBar: {
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(to right, #5fadfc, #5583f9, #4642f5)",
        paddingLeft: theme.spacing(20),
        paddingRight: theme.spacing(20),
        width: "100vw",
        left: 0,
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },  
    desktopWrapper: {
        display: "block",
        [theme.breakpoints.down('md')]: {
            display: "none"
        } 
    },
    mobileWrapper: {
        display: "none",
        [theme.breakpoints.down('md')]: {
            display: "block"
        } 
    },
    title: {
        flexGrow: 1,
        textDecoration :"none",
        color: "white",
    },
    menu: {
        paddingRight: theme.spacing(2),
    },
    logo: {
        marginRight: "1%",
        [theme.breakpoints.down('md')]: {
            marginLeft: "20%"
        }
    }
}) 


const HideOnScroll = props => {
    const { children, window } = props
    const trigger = useScrollTrigger({ target: window ? window() : undefined })
  
    return (
        <ElevationScroll {...props}>
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        </ElevationScroll>
      
    )
}

const ElevationScroll = props => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const ContactUsLink = ({ classes, handleOpen, }) => (
    <Button color="inherit" className={classes} onClick={handleOpen}>Contact Us</Button>
)

const PublicNavigation = (props) => (
    <Fragment>
        <Button color="inherit" component={Link} to={ROUTES.SIGN_UP}>Sign Up</Button>
        <Button color="inherit" component={Link} to={ROUTES.LOG_IN}>Login</Button>
        <Button color="inherit">Leaderboard</Button>
        <ContactUsLink {...props} />
        <Verzeo />
    </Fragment>
)

const PrivateNavigation = (props) => (
    <Fragment>
        <Button color="inherit" component={Link} to={ROUTES.MY_PROFILE}>My Profile</Button>
        <Button color="inherit" component={Link} to={ROUTES.DISPLAYTASKS}>TASKS</Button>
        <Button color="inherit">Leaderboard</Button>
        <ContactUsLink {...props} />
        <Verzeo />
        <Button color="inherit" component={Link} to={ROUTES.LOG_OUT}>Logout</Button>
    </Fragment>
)

const AdminRoutes = () => (
    <Fragment>
        <Button color="inherit" component={Link} to={ROUTES.CREATE_TASK}>Create a Task</Button>
        <Button color="inherit" component={Link} to={ROUTES.ADMIN}>Admin</Button>
        <Button color="inherit" component={Link} to={ROUTES.LOG_OUT}>Logout</Button>
    </Fragment>
)

class Navigation extends Component {

    state = {
        contactUs : false,
    }

    handleContactClose = () => {
        this.setState(() => ({
            contactUs: false,
        }))
    }

    handleOpen = () => {
        this.setState(() => ({
            contactUs: true,
        }))
    }

    render(){
        const { handleContactClose, handleOpen, } = this
        const { classes, authUser } = this.props
        const { contactUs } = this.state

        return  <HideOnScroll {...this.props}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <div className={classes.mobileWrapper}>
                                <MobileNavigation authUser={authUser} />
                            </div>
                            <ContactUs contactUs={contactUs} handleClose={handleContactClose} />
                            <img src={Logo} width="25" className={classes.logo} alt=""/> 
                            <Typography variant="h6" className={classes.title} component={Link} to={ROUTES.LANDING}>
                                CA Portal
                            </Typography>
                            <div className={classes.desktopWrapper}>
                                <div className={classes.menu}>
                                    { authUser ? (authUser.role === ROLES.ADMIN ? <AdminRoutes/> : <PrivateNavigation classes={classes} handleOpen={handleOpen} />) : <PublicNavigation classes={classes} handleOpen={handleOpen} /> }
                                </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>

               
    }
}

export default compose(
    withAuthUser,
    withStyles(styles),
)(Navigation)