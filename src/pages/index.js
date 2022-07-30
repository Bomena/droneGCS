import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Now from './Date'
import Grid from '@material-ui/core/Grid';
import './style.css'

const styles = theme => ({
    root: {
      background: '#eeeeee'
    },

});

class GridTop extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div id="box" className={classes.root}>
                <Grid className='box2' container spacing={3}>
                <Grid className='box2' item xs={10}>
                    <Now />
                </Grid>
                 <Grid className="btn" item xs={1}>
                    <div><h4>camera</h4></div>
                </Grid>
                <Grid className="btn2" item xs={1}>
                    <div><h4>log</h4></div>
                </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(GridTop)