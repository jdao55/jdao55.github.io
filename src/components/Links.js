import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default () => {
    const icon_classes = useStyles();
    return (
            <div className={icon_classes.root}>
            <a href="https://github.com/jdao55" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize='large' color='action'/>
            </a>
            <a href="https://www.linkedin.com/in/joseph-dao-1088909a/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize='large' color='action'/>
            </a>
            </div>
    )
}
