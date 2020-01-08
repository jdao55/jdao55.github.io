import React from 'react';
import './App.css';
import Name from './components/Name.js'
import Skills from './components/Skills'
import AboutMe from './components/Aboutme.js'
import Projects from './components/Projects.js'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#dbdde3',
  },
  chip: {
    marginRight: theme.spacing(1),
  },
    header: {
        margin: theme.spacing(3),
    },
    section: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
}));


function App() {
    const classes=useStyles();
    return (
            <div className={classes.root}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Name/>
            <AboutMe/>
            <Projects/>
            <Skills/>

        </div>
    );
}

export default App;
