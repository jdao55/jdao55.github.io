import React from 'react'
import SubHeader from './SubHeader.js'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

const AboutMe = () => {
    const classes = useStyles();
    return (
            <div className={classes.root}>
            <SubHeader label='About Me'/>
            Recent Grad from Univerisity of Windors. Availble for hire. Interested with systems programming, HPC, research and web technogies.
        </div>
    )
}


export default AboutMe
