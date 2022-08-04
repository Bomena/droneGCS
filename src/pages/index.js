import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Now from './Date'
import Grid from '@material-ui/core/Grid';
import './style.css';
import '../index.css';
import '../index.js'
import picture from "./offline.png"

const styles = theme => ({
    root: {
      background: '#eeeeee'
    },

});

class GridTop extends Component {

    openCamera = () => {
        if (document.getElementById("pic").src === "http://localhost:3000/static/media/offline.5757bca830909ce08813.png") {
            document.getElementById("pic").src = "";
        } else {
            document.getElementById("pic").src = picture;
        }
    }

    openLog = () => {
        
    }

    render() {
        const { classes } = this.props;
        return (
            <div id="box" className={classes.root}>
                <Grid id="box1" container spacing={3}>
                <Grid id="box2" item xs={10}>
                    <Now />
                </Grid>
                 <Grid id="box3" className='btn' onClick={this.openCamera} item xs={1}>
                    <div><h2 className='color'>camera</h2></div>
                </Grid>
                <Grid id="box4" className='btn'item xs={1}>
                    <div><h2 className='color'>log</h2></div>
                </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(GridTop)