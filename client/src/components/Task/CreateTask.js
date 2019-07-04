import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MUILink from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
// import DateFnsUtils from "@date-io/date-fns";
// import DatePicker from '@material-ui/pickers'
import CreateOutlined from '@material-ui/icons/CreateOutlined'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import { compose, renderComponent } from 'recompose'
import { withAuthorization } from '../../contexts/Session'
import Container from '@material-ui/core/Container'
import * as ROUTES from '../../constants/routes'
import * as  ROLES from '../../constants/roles'

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

class CreateTask extends Component{
    state = {
        title: '',
        description: '',
        deadline: '',
        points: '',
        errorMessage: ''
    }
    handleSubmit = e => {
        e.preventDefault()
        const {title, description, deadline, points} = this.state
        if( !(title && description && deadline && points)){
            this.setState(()=>({
                errorMessage: "Please fill the required fields",
            }))
            return
        }
        this.props.createTask({
            variables: {
                title,
                description,
                deadline,
                points
            }
        })
    }

    handleChange = e =>{
        e.persist()
        this.setState(()=>({
            [e.target.name]: e.target.value,
        }))
    }
    render(){
        const { handleSubmit , handleChange } = this
        const { classes, loading, error, data, } = this.props
        const { title, description, deadline, points, errorMessage } = this.state 
        const disabled = !title || !description || !deadline || !points
        return(
         <Container component="main" maxWidth="xs">
           <div className={classes.paper}>
             <Avatar className={classes.avatar}>
               <CreateOutlined />
             </Avatar>
             <Typography component="h1" variant="h5">
               Create Task
             </Typography>
             <form className={classes.form} onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                      autoComplete="title"
                      name="title"
                      variant="outlined"
                      required 
                      fullWidth
                      id="title"
                      label="Title"
                      value={title}
                      onChange={handleChange}
                      />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="description"
                    name="description"
                    variant="outlined"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    value={description}
                    onChange={handleChange}
                    multiline={true}
                    rows={12}
                    rowsMax={120}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                   autoComplete="deadline"
                   name="deadline"
                   variant="outlined"
                   requied
                   fullWidth
                   id="deadline"
                   label="deadline"
                   value={deadline}
                   onChange={handleChange}
                   type="date"
                   defaultValue="2017-05-24"
                   className={classes.textField}
                   InputLabelProps={{
                     shrink: true,
                   }}                   
                   />
                </Grid>   
                <Grid item xs={12} sm={6}>
                  <TextField 
                    autoComplete="points"
                    name="points"
                    variant="outlined"
                    required 
                    fullWidth
                    id="points"
                    label="Points"
                    value={points}
                    onChange={handleChange}                  
                  />
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={disabled}
                  className={classes.submit}
                  >
                  Create
                  {loading && 
                    <CircularProgress
                      color="secondary"
                      className={classes.spinner}
                      size={20}
                    />
                  }
                  </Button>
                  <div className={classes.center}>
                    {error && 
                      <Typography variant="h6" className={classes.error}>
                        {error.message} {errorMessage}
                      </Typography>
                    }
                    { data &&
                      <Typography variant="h6" className={classes.success}>
                        Task Created Successfully
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

const condition = authUser => !!authUser && authUser.role === ROLES.ADMIN

export default compose(
    withAuthorization(condition, ROUTES.HOME),
    withStyles(styles)
)(CreateTask)