import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Now from './Date'
import Grid from '@material-ui/core/Grid';
import './style.css';
import '../index.css';
import picture from '../offline.png'
import '../index'

const styles = theme => ({
    root: {
      background: '#eeeeee'
    },

});

function OpenCamera() {
    let image = new Image();
    image.src = document.getElementById('pic').src

    let plz = () => {
        if (image.src === {picture}) {
            image.src = "";
        } else {
            image.src = {picture};
        }
    }

    return (
        <h4 oneClick={plz}>camera</h4>
    )

}

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