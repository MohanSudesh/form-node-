import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import DialogTitle from '@material-ui/core/DialogTitle'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    question: {
      color: theme.palette.primary.main
    }
  })

const OtherDetailsModal = ({ handleClose, classes, data: {
    name, previousCA, previousCAYear, socialMediaSites, fbLink, whyDoYouWish, areYouTheRightCandidate, pastExperience,
} }) => {
    const otherDetails = [
        { name: 'Which Social Media Sites do you use?', detail: socialMediaSites, },
        { name: 'Facebook profile Link.', detail: fbLink, },
        { name: 'Why do you want to become a Campus Ambassador?', detail: whyDoYouWish, },
        { name: 'Why do you think you are the right candidate?', detail: areYouTheRightCandidate, },
        { name: 'Do you have any past experience in handling Positions of Responsibility?', detail: pastExperience, },
    ]

    if( previousCA ){
        otherDetails.push({ name: 'Was a CA for Shaastra previously.', detail: previousCAYear, },)
    }

    return (
        <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Other Details of {name}</DialogTitle>
                <DialogContent>
                    <Grid item container direction="column" xs={12}>
                        <Grid container>
                            {otherDetails.map(field => (
                                <Fragment key={field.name}>
                                    <Grid item xs={12}>
                                        <Typography gutterBottom className={classes.question}>{field.name}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography gutterBottom style={{ overflowWrap: "break-word", }}>{field.detail}</Typography>
                                    </Grid>
                                    <br/><br/><br/>
                                </Fragment>
                            ))}
                        </Grid>
                    </Grid>
                </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default withStyles(styles)(OtherDetailsModal)