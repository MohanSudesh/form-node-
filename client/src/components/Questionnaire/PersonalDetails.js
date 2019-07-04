import React, { Fragment, } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { STATES } from '../../constants/states'

const styles = theme => ({
    input: {
        margin: 0,
    }
})

const PersonalDetails = ({ classes, studentState, city, name, email, postalAddress, pincode, contactNumber, whatsappNumber, handleChange, }) => (
    <Fragment>
        <Typography variant="h6" gutterBottom>
            Personal Details
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    id="name"
                    name="name"
                    label="Full Name"
                    value={name}
                    variant="outlined"
                    margin="normal"
                    className={classes.input}
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    id="email"
                    type="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    value={email}
                    variant="outlined"
                    margin="normal"
                    className={classes.input}
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    id="state"
                    select
                    label="State"
                    name="studentState"
                    value={studentState}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                >
                    {STATES.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    id="city"
                    label="City"
                    name="city"
                    value={city}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    name="postalAddress"
                    onChange={handleChange}
                    value={postalAddress}
                    id="postalAddress"
                    label="Postal Address"
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                    multiline
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    id="pincode"
                    label="Pincode"
                    name="pincode"
                    value={pincode}
                    onChange={handleChange}
                    type="number"
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    id="contactNumber"
                    label="Contact Number"
                    type="number"
                    name="contactNumber"
                    value={contactNumber}
                    onChange={handleChange}
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    id="whatsappNumber"
                    label="Whatsapp Number"
                    type="number"
                    name="whatsappNumber"
                    value={whatsappNumber}
                    onChange={handleChange}
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                />
            </Grid>
        </Grid>
    </Fragment>
)

export default withStyles(styles)(PersonalDetails)