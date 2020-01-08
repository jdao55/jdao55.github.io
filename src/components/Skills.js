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

const skill_list = [
    {
        label: "Programming Languages",
        desc: "C++, C, Java, Javascript, Go, Python, Bash"
    },
    {
        label: "Operatating Systems",
        desc: "Linux (debian, rpm based), Windows"
    },
    {
        label: "Other",
        desc: "git, Jira, Cmake, gdb/lldb, Html, React, Django"
    }
]

const SkillLine = (props) => {
    const classes = useStyles();
    return (
         <div>
        <Typography className={classes.root} variant="overline" gutterBottom>
            <b>{props.label}:</b>
        </Typography>
            {props.desc}
        </div>
    )
}

const Skills = () => {
    return (
        <div>
            <SubHeader label='Technical Skills'/>
            {skill_list.map(skill => <SkillLine label={skill.label} desc={skill.desc}/>)}
        </div>
    )
}
export default Skills
