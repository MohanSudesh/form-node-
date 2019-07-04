import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import * as ROUTES from '../../constants/routes'

const SuccessfullQuestionnaireAlert = () => (
    <div>
      <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have successfully filled the questionnaire. Kindly keep checking your
            mails for further communication pertaining to the selection process.          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button component={Link} to={ROUTES.MY_PROFILE} color="primary">
            Check your profile
          </Button>
        </DialogActions>
      </Dialog>
    </div>
)

export default SuccessfullQuestionnaireAlert