import React from 'react'
import Typography from '@material-ui/core/Typography';
import Links from './Links.js'
import NameChips from './NameChips.js'

export default () => {
    return (
        <div>
            <Typography variant="h2">
            Joseph Dao
            </Typography>
            <NameChips/>
            <Links/>
        </div>
    )
}
