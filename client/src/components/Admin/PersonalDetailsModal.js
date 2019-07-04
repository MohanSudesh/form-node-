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

const PersonalDetailsModal = ({ handleClose, classes, data: {
    studentState, city, name, email, postalAddress, pincode, contactNumber, whatsappNumber,
    collegeState, collegeName, collegeAddress, degree, branch, year, collegeCity,
} }) => {
    const personalDetails = [
        { name: 'Name', detail: name },
        { name: 'Email', detail: email },
        { name: 'State', detail: studentState },
        { name: 'City', detail: city },
        { name: 'Postal Address', detail: postalAddress },
        { name: 'Pincode', detail: pincode },
        { name: 'Contact Number', detail: contactNumber },
        { name: 'Whatsapp Number', detail: whatsappNumber },
        { name: 'College Name', detail: collegeName },
        { name: 'College State', detail: collegeState },
        { name: 'College City', detail: collegeCity },
        { name: 'College Address', detail: collegeAddress },
        { name: 'Degree', detail: degree },
        { name: 'Branch', detail: branch },
        { name: 'Year', detail: year },
    ]

    return (
        <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Personal Details of {name}</DialogTitle>
                <DialogContent>
                    <Grid item container direction="column" xs={12}>
                        <Grid container>
                            {personalDetails.map(field => (
                                <Fragment key={field.name}>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom className={classes.question}>{field.name}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom style={{ overflowWrap: "break-word", }}>{field.detail}</Typography>
                                    </Grid>
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

export default withStyles(styles)(PersonalDetailsModal)