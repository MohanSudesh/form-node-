import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { ContactUs, Verzeo, }from './'
import * as ROUTES from '../../constants/routes'
import * as ROLES from '../../constants/roles'

const styles = theme => ({
    root: {
        paddingTop: theme.spacing(5),
    },
    link: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    }
})

const ContactUsLink = ({ classes, handleOpen, }) => (
    <ListItem component={Link} onClick={handleOpen} className={classes.link} button>
        <ListItemText primary="Contact Us"/>
    </ListItem>
)

const PublicNavigation = ({ classes, handleOpen, handleClose, }) => (
    <List component="nav">
        <ListItem component={Link} onClick={handleClose} className={classes.link} to={ROUTES.SIGN_UP} button>
            <ListItemText primary="Sign Up"/>
        </ListItem>
        <ListItem component={Link} onClick={handleClose} className={classes.link} to={ROUTES.LOG_IN} button>
            <ListItemText primary="Login"/>
        </ListItem>
        <ListItem component={Link} onClick={handleClose} className={classes.link} button>
            <ListItemText primary="Leaderboard"/>
        </ListItem>
        <ContactUsLink classes={classes} handleOpen={handleOpen} />
        <Verzeo link={true} />
    </List>   
)

const PrivateNavigation = ({ classes, handleOpen, handleClose }) => (
    <List component="nav">
        <ListItem component={Link} onClick={handleClose} className={classes.link} to={ROUTES.MY_PROFILE} button>
            <ListItemText primary="My Profile"/>
        </ListItem>
        <ListItem component={Link} onClick={handleClose} className={classes.link} to={ROUTES.DISPLAYTASKS} button>
            <ListItemText primary="Tasks"/>
        </ListItem>
        <ListItem component={Link} onClick={handleClose} className={classes.link} button>
            <ListItemText primary="Leaderboard"/>
        </ListItem>
        <Verzeo />
        <ContactUsLink classes={classes} handleOpen={handleOpen} />
        <ListItem component={Link} onClick={handleClose} className={classes.link} to={ROUTES.LOG_OUT} button>
            <ListItemText primary="Log Out"/>
        </ListItem>
    </List>   
)

const AdminRoutes = ({ classes, handleClose }) => (
    <List component="nav">
        <ListItem component={Link} onClick={handleClose} className={classes.link} to={ROUTES.CREATE_TASK} button>
            <ListItemText primary="Create Task"/>
        </ListItem>
        <ListItem component={Link} onClick={handleClose} className={classes.link} to={ROUTES.ADMIN} button>
            <ListItemText primary="Admin"/>
        </ListItem>
        <ListItem component={Link} onClick={handleClose} className={classes.link} to={ROUTES.LOG_OUT} button>
            <ListItemText primary="Log Out"/>
        </ListItem>
    </List>
)

class MobileNavigation extends Component{

    state = {
        isOpen: false,
        contactUs: false,
    }

    handleContactClose = () => {
        this.setState(() => ({
            contactUs: false,
        }))
    }

    handleClose = () => {
        this.setState(() => ({
            isOpen: false,
        }))
    }

    handleOpen = () => {
        this.setState(() => ({
            contactUs: true,
        }))
    }

    render(){
        const { handleClose, handleOpen, handleContactClose, } = this
        const { authUser, classes, } = this.props
        const { isOpen, contactUs, } = this.state

        return (
            <Fragment>
                <Drawer open={isOpen} onClose={() => this.setState(() => ({ isOpen: false, }))}>
                    <div className={classes.root}>
                        { authUser ? (authUser.role === ROLES.ADMIN ? <AdminRoutes classes={classes} handleOpen={handleOpen} handleClose={handleClose} /> : <PrivateNavigation classes={classes} handleOpen={handleOpen} handleClose={handleClose} />) : <PublicNavigation classes={classes} handleOpen={handleOpen} handleClose={handleClose} /> }
                    </div>    
                </Drawer>
                <IconButton edge="start" color="inherit" aria-label="Menu" onClick={() => this.setState(() => ({ isOpen: true, }))}>
                    <MenuIcon />
                </IconButton>
                <ContactUs contactUs={contactUs} handleClose={handleContactClose} />
            </Fragment>
        )
    }
}

export default withStyles(styles)(MobileNavigation)