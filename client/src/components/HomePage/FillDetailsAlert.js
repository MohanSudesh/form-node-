import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import * as ROUTES from '../../constants/routes'

const FillDetailsAlert = () => (
    <div>
      <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Fill in details to continue"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please complete the questionnaire on the portal by 28th July 2019, which is
            mandatory for selection. Further instructions pertaining to the selection
            process shall be intimated by mail. Click on the below button to continue. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button component={ Link} to={ROUTES.QUESTIONNAIRE} color="primary">
            Questionnaire
          </Button>
        </DialogActions>
      </Dialog>
    </div>
)

export default FillDetailsAlert