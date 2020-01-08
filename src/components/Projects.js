import React from 'react'
import SubHeader from './SubHeader.js'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import Divider from '@material-ui/core/Divider';
import LinkIcon from '@material-ui/icons/Link';

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


const projectList = [
    {
        title: "GSP graph Recognition",
        desc: "Implementation of Research paper which recognizes general series parallel graphs in linear time",
        url: "",
        repo: ""
    },
    {
        title: "Ray tracer",
        desc: "Monte Carlo implementation of a ray tracer",
        url: "",
        repo: "https://github.com/jdao55/ray-tracer"
    }
]
const ProjectLine = (props) => {
    const classes = useStyles();

    return (
        <div>
        {/* <Divider light/> */}
        <Typography className={classes.root} variant="overline" gutterBottom>
            <div>
                <b>{props.title}</b> | {props.desc}
            </div>
                <ProjectLink url={props.url}/>
                <GithubLink repo={props.repo}/>
        </Typography>
        </div>
    )
}

const ProjectLink = (props) => {
    if (props.url) {
        return (
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <LinkIcon color='action'/>
            </a>
        )
    } else {
        return (
            <div></div>
        )
    }
}


const GithubLink = (props) => {
    if (props.repo) {
        return (
            <a href={props.repo} target="_blank" rel="noopener noreferrer">
                <GitHubIcon color='action'/>
            </a>
        )
    } else {
        return (
            <div></div>
        )
    }
}
const Projects = () => {
    const classes = useStyles();

    return (
        <div>
        <SubHeader label="Projects"/>
            <div className={classes.root}>
                {projectList.map(project => <ProjectLine title={project.title} desc={project.desc} url={project.url} repo={project.repo}/>)}
            </div>
        </div>
    )
}

export default Projects
