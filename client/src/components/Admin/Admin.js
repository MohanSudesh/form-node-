import React, { Component, Fragment, } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Link from '@material-ui/core/Link'
import CircularProgress from '@material-ui/core/CircularProgress'
import ErrorIcon from '@material-ui/icons/Error'
import { compose } from 'recompose'
import Button from '@material-ui/core/Button'
import { withAuthorization } from '../../contexts/Session'
import * as STATUS from '../../constants/status'
import * as ROUTES from '../../constants/routes'
import * as  ROLES from '../../constants/roles'
import { PersonalDetailsModal, OtherDetailsModal } from './'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(12),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    button: {
        marginRight: theme.spacing(2),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        overflowWrap: 'break-word',
    },
    icon: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
        fontSize: 20,
    },
    progress: {
        marginTop: theme.spacing(8),
        marginLeft: "250%"
    }
})

class Admin extends Component {

    state = {
        page: 0,
        rowsPerPage: 5,
        personalDetailsOpen: false,
        otherDetailsOpen: false,
        studentData: null,
        mutationId: null,
    }

    handleChangePage = (event, newPage) => {
        this.setState(() => ({
            page: newPage,
        }))
    }

    handleChangeRowsPerPage = e => {
        this.setState(() => ({
            rowsPerPage: e.target.value,
        }))
    }

    handleClose = componentName => {
        this.setState(() => ({
            [componentName]: false,
        }))
    }

    changeStatus = (userId, type, mutationIndex,) => {
        this.setState(() => ({
            mutationId: userId,
            mutationIndex,
            mutationType: type,
        }))
        this.props.changeStatus({
            variables: {
                userId,
                type,
            }
        })
    }

    render(){
        const { handleChangePage, handleChangeRowsPerPage, handleClose, changeStatus, snackbarClose, } = this
        const { classes, data, loading, error, mutationLoading, mutationData, } = this.props
        const { page, rowsPerPage, studentData, personalDetailsOpen, mutationType, mutationIndex, otherDetailsOpen, mutationId, } = this.state
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data && data.length - page * rowsPerPage)
        if( mutationData && mutationData.changeStatus.success ){
            console.log("hi")
            data[mutationIndex].status = mutationType 
        }
        console.log(mutationData)

        return (
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Paper className={classes.root}>
                        <Table className={classes.table} rows={rowsPerPage}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Personal Details</TableCell>
                                    <TableCell>Other Details</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { loading ?
                                    <CircularProgress className={classes.progress} />  :
                                    data && data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map(({ name, email, userId, status, ...rest }, index) =>(
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row">
                                                    {name}
                                                </TableCell>
                                                <TableCell>{email}</TableCell>
                                                <TableCell>
                                                    <Link
                                                        component="button"
                                                        variant="body2"
                                                        onClick={() => {
                                                            this.setState(() => ({
                                                                personalDetailsOpen: true,
                                                                studentData: {...rest, name, email, },
                                                            }))
                                                        }}
                                                    >
                                                        Click Here
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    <Link
                                                        component="button"
                                                        variant="body2"
                                                        onClick={() => {
                                                            this.setState(() => ({
                                                                otherDetailsOpen: true,
                                                                studentData: {...rest, name, email, },
                                                            }))
                                                        }}
                                                    >
                                                        Click Here
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    { (status && status !== STATUS.PENDING) ?
                                                        <Button
                                                            color="primary"
                                                            variant="contained"
                                                            size="small"
                                                            className={classes.button}
                                                            disabled
                                                        >
                                                            {status}
                                                        </Button> :
                                                        <Fragment>
                                                            { ( userId === mutationId && mutationLoading ) ? (
                                                                <CircularProgress />
                                                            ) : (
                                                                <Fragment>
                                                                    <Button
                                                                        color="primary"
                                                                        variant="contained"
                                                                        size="small"
                                                                        className={classes.button}
                                                                        onClick={() => changeStatus(userId, STATUS.SELECTED, page * rowsPerPage + index,)}
                                                                    >
                                                                        Select
                                                                    </Button>
                                                                    <Button
                                                                        color="secondary"
                                                                        variant="contained"
                                                                        size="small"
                                                                        className={classes.button}
                                                                        onClick={() => changeStatus(userId, STATUS.REJECTED, page * rowsPerPage + index,)}
                                                                    >
                                                                        Reject
                                                                    </Button>
                                                                </Fragment>
                                                            )}
                                                        </Fragment>
                                                    }
                                                </TableCell>
                                            </TableRow>
                                        )
                                    )
                                }
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 49 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={data && data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                                'aria-label': 'Previous Page',
                            }}
                            nextIconButtonProps={{
                                'aria-label': 'Next Page',
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                    { personalDetailsOpen &&
                        <PersonalDetailsModal handleClose={() => handleClose('personalDetailsOpen')} data={studentData} />
                    }
                    { otherDetailsOpen &&
                        <OtherDetailsModal handleClose={() => handleClose('otherDetailsOpen')} data={studentData} />
                    }
                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={error || (mutationData && !mutationData.changeStatus.success)}
                    autoHideDuration={1000}
                >
                    <SnackbarContent
                        aria-describedby="client-snackbar"
                        message={
                            <span id="client-snackbar" className={classes.message}>
                                <ErrorIcon className={classes.icon} />  
                                Something went wrong! <br/> { (error && error.message) || (mutationData && mutationData.message) }
                            </span>
                        }
                    />
                </Snackbar>
             </Grid>
        )
    }
}

const condition = authUser => !!authUser && authUser.role === ROLES.ADMIN

export default compose(
    withAuthorization(condition, ROUTES.HOME),
    withStyles(styles)
)(Admin)