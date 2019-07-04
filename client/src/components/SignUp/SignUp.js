import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MUILink from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import { withAuthorization } from '../../contexts/Session'
import Container from '@material-ui/core/Container'
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  spinner: {
    marginLeft: theme.spacing(4)
  },
  error: {
    color: theme.palette.error.main,
  },
  center: {
    textAlign: "center",
    marginTop: theme.spacing(3)
  },
  success: {
    color: "green",
  },
})

class SignUp extends Component{

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errorMessage: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    const { firstName, lastName, email, password } = this.state
    if( !(firstName && lastName && email && password) ){
      this.setState(() => ({
        errorMessage: "Please fill the requried fields",
      }))
      return
    }
    this.props.createUser({
      variables: {
        name: firstName + lastName,
        email,
        password,
      }
    })
  }

  handleChange = e => {
    e.persist()
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }))
  }
  
  render(){
      const { handleSubmit, handleChange } = this
      const { classes, loading, error, data, } = this.props
      const { firstName, lastName, email, password, errorMessage } = this.state
      const disabled = !firstName ||
                        !lastName ||
                        !email ||
                        !password

      return (
          <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            value={firstName}
                            onChange={handleChange}
                            autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                            value={lastName}
                            onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handleChange}
                        />
                      </Grid>
                  </Grid>
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      disabled={disabled}
                      className={classes.submit}
                  >
                      Sign Up
                      {loading && 
                        <CircularProgress
                          color="secondary"
                          className={classes.spinner}
                          size={20}
                        />
                      }
                  </Button>
                  <Grid container justify="flex-end">
                      <Grid item>
                        <MUILink component={Link} variant="body2" to={ROUTES.LOG_IN}>
                            Already have an account? Login
                        </MUILink>
                      </Grid>
                  </Grid>
                  <div className={classes.center}>
                    {error && 
                      <Typography variant="p" className={classes.error}>
                        {error.message} {errorMessage}
                      </Typography>
                    }
                    { data &&
                      <Typography variant="p" className={classes.success}>
                        You have successfully signed up. A mail has been sent to your email address confirming the same. Kindly check the mail for further instructions.
                      </Typography>
                    }
                  </div>
                </form>
            </div>
          </Container>
      )
  }
}

const condition = authUser => !authUser
  
export default compose(
  withAuthorization(condition, ROUTES.HOME),
  withStyles(styles)
)(SignUp)