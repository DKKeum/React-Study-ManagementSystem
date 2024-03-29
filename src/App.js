import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://loremflickr.com/128/128/1',
    'name': 'mr.gold',
    'birthday': '910423',
    'gender': 'man',
    'job': 'doctor'
  },
  {
    'id': 2,
    'image': 'https://loremflickr.com/128/128/2',
    'name': 'mr.Neo',
    'birthday': '700725',
    'gender': 'man',
    'job': 'Actor'
  },
  {
    'id': 3,
    'image': 'https://loremflickr.com/128/128/3',
    'name': 'mr.Bliss',
    'birthday': '951120',
    'gender': 'man',
    'job': 'Student'
  }
]
class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />) })}
            </TableBody>
          </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
