import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Now from './Date'
import Grid from '@material-ui/core/Grid';
import Change from './camChange';
import './style.css';
import '../index.css';
import '../index.js'
//import picture from "./offline.png"

const styles = theme => ({
    root: {
      background: '#eeeeee'
    },

});



class GridTop extends Component {

    openLog = () => {
        if (document.getElementById('log').className === 'log') {
            document.getElementById('log').className = 'none';
        } else {
            document.getElementById('log').className = 'log';
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div id="box" className={classes.root}>
                <Grid id="box1" container spacing={3}>
                <Grid id="box2" item xs={5}>
                    <Now />
                </Grid>
                <Grid id="box4" className='btn' onClick={this.openLog} item xs={6}>
                    <div><h2 className='color'>log</h2></div>
                </Grid>
                <Grid id="box3" className='btn' item xs={1}>
                    <Change />
                </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(GridTop)