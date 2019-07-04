import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(2),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
    title: {
        fontWeight: 500,
        [theme.breakpoints.down('md')]: {
            fontSize: "28px"
        }
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];



function DisplayTasks(){
    
        const classes = useStyles();
        return(
            <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Typography variant="h4" className={classes.title}>
                            Tasks
                </Typography>
            <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Deadline&nbsp;</TableCell>
            <TableCell align="right">Points&nbsp;</TableCell>
            <TableCell align="right">Add Proof&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                
              </TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
    </Grid>
    </Grid>
        )

}
export default DisplayTasks
