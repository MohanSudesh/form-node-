import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import MUILink from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { withAuthorization } from '../../contexts/Session'
import * as ROUTES from '../../constants/routes'

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.lockIcon.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
      color: theme.palette.error.main,
  },
  center: {
      textAlign: "center",
      marginTop: theme.spacing(2)
  },
})

class LogIn extends Component {

    state = {
        email: "",
        password: "",
    }

    handleChange = e => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value,
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.login({
            variables: {
                ...this.state
            }
        })
    }

    render(){
        const { handleSubmit, handleChange, } = this
        const { classes, loading, error, } = this.props
        const { email, password } = this.state

        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            { loading ? 
                                <CircularProgress
                                    color="secondary"
                                    size={20}
                                /> :
                                "Sign In"
                            }
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            <MUILink to={'/'} component={Link} variant="body2">
                                Forgot password?
                            </MUILink>
                            </Grid>
                            <Grid item>
                            <MUILink to={ROUTES.SIGN_UP} component={Link} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </MUILink>
                            </Grid>
                            <div className={classes.center}>
                                {error && 
                                    <Typography variant="p" className={classes.error}>
                                        {error.message}
                                    </Typography>
                                }
                            </div>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}

const condition = authUser => !authUser

export default compose(
    withAuthorization(condition, ROUTES.HOME),
    withStyles(styles),
)(LogIn)