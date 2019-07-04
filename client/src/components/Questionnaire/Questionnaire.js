import React, { Fragment, Component, } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { compose } from 'recompose'
import { PersonalDetails, OtherQuestions, CollegeDetails, Review, } from './'
import { withAuthorization } from '../../contexts/Session'
import * as ROUTES from '../../constants/routes'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10)
    },
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
})

const steps = ['Personal Details', 'College Details', 'Other Questions', 'Review Information']

class Questionnaire extends Component{

  state = {
    activeStep: 0,
    agree: false,
    //For Personal Details
    studentState: "",
    name: this.props.authUser.name,
    email: this.props.authUser.email,
    postalAddress: "",
    pincode: "",
    contactNumber: "",
    whatsappNumber: "",
    city: "",
    //For College Details
    collegeState: "",
    collegeName: "",
    collegeAddress: "",
    degree: "",
    branch: "",
    year: "",
    collegeCity: "",
    //Other Questions
    socialMediaSites: "",
    fbLink: "",
    whyDoYouWish: "",
    areYouTheRightCandidate: "",
    pastExperience: "",
    previousCA: false,
    previousCAYear: "",
    //Failures
    failed0: false,
    failed1: false,
    failed2: false,
  }

  handleBack = () => {
    this.setState(prevState => ({
        activeStep: prevState.activeStep - 1,
    }))
  }

  handleSubmit = () => {
    const { activeStep, agree, failed0, failed1, failed2,...rest } = this.state
    if( !agree ){
      return
    }
    this.props.questionnaire({
      variables: {
        ...rest,
      }
    })
  }

  handleNext = () => {
    const { handleSubmit } = this
    const { activeStep } = this.state
    let failed = false
    if( activeStep === 3 ){
      handleSubmit()
    }
    switch(activeStep){
      case 0:
        const { studentState, name, email, postalAddress, pincode, contactNumber, whatsappNumber, city, } = this.state
        failed = !studentState || !name || !email || !postalAddress || !pincode || !contactNumber || !whatsappNumber || !city
        if( failed ){
          this.setState(() => ({
            failed0: true,
          }))
        } else {
          this.setState(() => ({
            failed0: false,
          }))
        }
      break
      case 1:
        const { collegeState, collegeName, collegeAddress, degree, branch, year, collegeCity, } = this.state
        failed = !collegeState || !collegeName || !collegeAddress || !degree || !branch || !year || !collegeCity
        if( failed ){
          this.setState(() => ({
            failed1: true,
          }))
        } else {
          this.setState(() => ({
            failed1: false,
          }))
        }
      break
      case 2:
        const { socialMediaSites, fbLink, whyDoYouWish, areYouTheRightCandidate, pastExperience, previousCA, previousCAYear, } = this.state
        failed = !socialMediaSites || !fbLink || !whyDoYouWish || !areYouTheRightCandidate || !pastExperience
        if( failed || (previousCA && !previousCAYear) ){
          this.setState(() => ({
            failed2: true,
          }))
        } else {
          this.setState(() => ({
            failed2: false,
          }))
        }
      break
    }
    this.setState(prevState => ({
        activeStep: prevState.activeStep + 1,
    }))
  }

  handleChange = e => {
    e.persist()
    if(e.target.name === "previousCA"){
      this.setState(prevState => ({
        previousCA: !prevState.previousCA
      }))
      return
    } else if(e.target.name === "agree"){
      this.setState(prevState => ({
        agree: !prevState.agree
      }))
      return
    }
    this.setState(() => ({
          [e.target.name]: e.target.value,
    }))
  }

  getStepContent = step => {
    const { handleChange } = this

    switch (step) {
      case 0:
        return <PersonalDetails {...this.state} handleChange={handleChange} />
      case 1:
        return <CollegeDetails {...this.state} handleChange={handleChange} />
      case 2:
        return <OtherQuestions {...this.state} handleChange={handleChange} />
      case 3:
        return <Review {...this.state} />
      default:
        throw new Error('Unknown step')
    }
  }

  componentWillMount(){
    this.handleSubmit()
  }

  render(){
    const { getStepContent, handleBack, handleNext, handleChange, } = this
    const { classes, loading, error, data, } = this.props
    const { activeStep, agree, failed0, failed1, failed2 } = this.state
    const failed = failed0 || failed1 || failed2

    return (
      <Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Questionnaire
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
              {steps.map((label, index) => {
                const labelProps = {}
                if( activeStep !== index ){
                  labelProps.error = this.state[`failed${index}`]
                }
                return (
                  <Step key={label}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
              )})}
            </Stepper>

            <Fragment>
              {activeStep === steps.length ? (
                <Fragment>
                  { loading && 
                    <CircularProgress className={classes.progress} />
                  }
                  { error &&
                    <Fragment>
                      <Typography variant="h5" gutterBottom>
                        Something Went Wrong!!!
                      </Typography>
                      <Typography variant="subtitle1" style={{ color: "red" }}>
                        { error.message }
                      </Typography>
                    </Fragment>
                  }
                  { data &&
                    <Fragment>
                      <Typography variant="h5" gutterBottom>
                        Thank you for your time!!
                      </Typography>
                      <Typography variant="subtitle1">
                        You have successfully filled the questionnaire. Kindly keep checking your
                        mails for further communication pertaining to the selection process.                    
                      </Typography>
                    </Fragment>
                  }
                </Fragment>
              ) : (
                <Fragment>
                  {getStepContent(activeStep)}
                  <br/>
                  { activeStep === steps.length - 1 &&
                    <Grid container>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox color="primary" name="agree" value="yes" checked={agree} onChange={handleChange} />}
                          label="I wish to represent Shaastra 2019 for my institute and I have
                          read and agree to all the Terms and Conditions stated by Shaastra for
                          the Campus Ambassador Program on the CA website.
                          "
                        />
                      </Grid>
                    </Grid>
                  }
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                      disabled={activeStep === steps.length - 1 && (!agree || failed)}
                    >
                      {activeStep === steps.length - 1 ? 'Submit Details' : 'Next'}
                    </Button>
                  </div>
                </Fragment>
              )}
            </Fragment>
          </Paper>
        </main>
      </Fragment>
    )
  }
}

const condition = authUser => !!authUser

export default compose(
  withAuthorization(condition, ROUTES.LOG_IN),
  withStyles(styles)
)(Questionnaire)