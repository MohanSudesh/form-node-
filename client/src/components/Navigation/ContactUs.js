import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'
import Link from '@material-ui/core/Link'

const ContactUs = ({ handleClose, contactUs }) => (
    <Dialog
        open={contactUs}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Contact Us</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Mail us at <Link href="mailto:outreach@shaastra.org">outreach@shaastra.org</Link> for queries.
          </DialogContentText>
        </DialogContent>
    </Dialog>
)

export default ContactUs