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

const CollegeDetails = ({ classes, collegeState, collegeName, collegeAddress, degree, branch, year, collegeCity, handleChange, }) => (
    <Fragment>
        <Typography variant="h6" gutterBottom>
            College Details
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    id="collegeName"
                    name="collegeName"
                    label="College Name"
                    onChange={handleChange}
                    value={collegeName}
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    name="degree"
                    onChange={handleChange}
                    value={degree}
                    id="degree"
                    label="Degree"
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    name="branch"
                    onChange={handleChange}
                    value={branch}
                    id="branch"
                    label="Branch"
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    required
                    id="year"
                    label="year"
                    type="number"
                    name="year"
                    value={year}
                    onChange={handleChange}
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    id="collegeState"
                    select
                    label="College State"
                    name="collegeState"
                    value={collegeState}
                    onChange={handleChange}
                    variant="outlined"
                    className={classes.input}
                    margin="normal"
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
                    id="collegeCity"
                    label="College City"
                    name="collegeCity"
                    value={collegeCity}
                    onChange={handleChange}
                    variant="outlined"
                    className={classes.input}
                    margin="normal"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    name="collegeAddress"
                    onChange={handleChange}
                    value={collegeAddress}
                    id="collegeAddress"
                    label="College Address"
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                    multiline
                />
            </Grid>
        </Grid>
    </Fragment>
)

export default withStyles(styles)(CollegeDetails)