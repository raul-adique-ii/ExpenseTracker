import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '1px',       
    },
    font: {
        fontFamily: 'Dancing Script, cursive',
        fontSize: '80px',
        color: '#DBADEC'
    }
}))

const Header = ({ title }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <h1 className={classes.font}>{title}</h1>
        </div>
    )
}

export default Header
