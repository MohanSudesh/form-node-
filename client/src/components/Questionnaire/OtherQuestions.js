import React, { Fragment, Component, } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import { SkillDetails } from './'

class OtherQuestions extends Component{

  state = {
    openDialog: false,
  }

  render(){
    const { openDialog, } = this.state
    const { previousCA, handleChange, previousCAYear, socialMediaSites, fbLink, whyDoYouWish, areYouTheRightCandidate, pastExperience, } = this.props
    const failed = !socialMediaSites || !fbLink || !whyDoYouWish || !areYouTheRightCandidate || !pastExperience 

    return (
      <Fragment>
        <Typography variant="h6" gutterBottom>
          Other Questions
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch checked={previousCA} name="previousCA" color="primary" onChange={handleChange} value="Was A Part" />
              }
              label="I was a Campus Ambassador for Shaastra Before."
            />
            { previousCA && 
                <TextField
                  required
                  name="previousCAYear"
                  onChange={handleChange}
                  value={previousCAYear}
                  id="previousCAYear"
                  label="Which Year? and Tell us more....."
                  variant="outlined"
                  rows="5"
                  fullWidth
                  multiline
                />
            }
            <br/>
            <div style={{ textAlign: "center", marginTop: "10%" }}>
              <Button variant="contained" color="primary" onClick={() => this.setState(() => ({ openDialog: true, }))}>
                {failed ? "Answer a Few Questions about Your Skills!" : "Successfully Recorded!!"}
              </Button>
              <br/>
              <br/>
              <Typography variant="p" style={{ color: "green" }}>
                { !failed && "Click next to continue, click on the above button to edit response." }
              </Typography>
            </div>
          </Grid>
        </Grid>
        { openDialog && 
          <SkillDetails handleClose={() => this.setState(() => ({ openDialog: false, }))} {...this.props} />
        }
      </Fragment>
    )
  }
}

export default OtherQuestions