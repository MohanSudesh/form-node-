import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import TextField from '@material-ui/core/TextField'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'

class SkillDetails extends Component {

    state = {
        activeStep: 0,
        finished: false,
        failed0: false,
        failed1: false,
        failed2: false,
    }

    getStepContent = (step) => {
        const { socialMediaSites, fbLink, whyDoYouWish, areYouTheRightCandidate, pastExperience, handleChange, } = this.props

        switch (step) {
          case 0:
            return  <div style={{ marginBottom: "5%" }}>
                        <TextField
                            required
                            id="socialMediaSites"
                            name="socialMediaSites"
                            label="Which social media sites do you use?"
                            value={socialMediaSites}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            multiline
                        />
                        <br/>
                        <br/>
                        <TextField
                            required
                            id="fbLink"
                            name="fbLink"
                            value={fbLink}
                            onChange={handleChange}
                            label="Facebook Profile Link"
                            variant="outlined"
                            fullWidth
                            multiline
                        />
                    </div>
          case 1:
            return <div style={{ marginBottom: "5%" }}>
                        <TextField
                            required
                            id="whyDoYouWish"
                            name="whyDoYouWish"
                            value={whyDoYouWish}
                            onChange={handleChange}
                            label="Why do you wish to become a Campus Ambassador?"
                            variant="outlined"
                            fullWidth
                            multiline
                        />
                        <br/>
                        <br/>
                        <TextField
                            required
                            id="areYouTheRightCandidate"
                            name="areYouTheRightCandidate"
                            value={areYouTheRightCandidate}
                            onChange={handleChange}
                            label="Why do you think you are the right candidate?"
                            variant="outlined"
                            fullWidth
                            multiline
                        />
                    </div>
          case 2:
            return  <TextField
                        required
                        id="pastExperience"
                        name="pastExperience"
                        value={pastExperience}
                        onChange={handleChange}
                        label="Do you have any past experience in handling Positions of Responsibility?"
                        variant="outlined"
                        margin="normal"
                        rows="10"
                        style={{ marginBottom: "5%" }}
                        fullWidth
                        multiline
                    />
          default:
            return 'Unknown step';
        }
    }

    getSteps = () => {
        return ['Social Media Sites', 'Motivation', 'Previous Experiences'];
    }
      

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }))
    }

    handleNext = () => {
        const { activeStep } = this.state
        let failed = false
        switch(activeStep){
            case 0:
                const { socialMediaSites, fbLink, } = this.props
                failed = !socialMediaSites || !fbLink
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
                const { whyDoYouWish, areYouTheRightCandidate, } = this.props
                failed = !whyDoYouWish || !areYouTheRightCandidate
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
                const { pastExperience } = this.props
                failed = !pastExperience
                if( failed ){
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
        if( activeStep == 2 ){
            this.setState(() => ({
                finished: true,
            }))
        }
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }))
    }

    render(){
        const { getStepContent, handleBack, handleNext, getSteps, } = this
        const { socialMediaSites, fbLink, whyDoYouWish, areYouTheRightCandidate, pastExperience, handleClose, } = this.props
        const { activeStep, finished, } = this.state
        const failed = !socialMediaSites || !fbLink || !whyDoYouWish || !areYouTheRightCandidate || !pastExperience 
        const steps = getSteps()
        return (
            <Dialog open={true} onClose={handleClose} style={{ width: "100%"}} aria-labelledby="form-dialog-title" fullScreen>
                <DialogTitle id="form-dialog-title">Skill Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Complete this form to add your skills for evaluation.
                    </DialogContentText>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => {
                            const labelProps = {}
                            if( activeStep !== index ){
                                labelProps.error = this.state[`failed${index}`]
                            }
                            return (
                                <Step key={label}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                    <StepContent>
                                        <Typography>{getStepContent(index)}</Typography>
                                        <div>
                                            <div>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                >
                                                    Back
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleNext}
                                                    disabled={activeStep === steps.length - 1 && failed}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                        )})}
                    </Stepper>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    {(finished && !failed) ? 'Submit' : 'Cancel'}
                </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default SkillDetails