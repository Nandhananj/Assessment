import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Content = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
            
            <Button variant='contained' color='success'><Link to="/">Home</Link></Button>
            <Typography varient = "h2" sx={{flexGrow: 2}} fontFamily={"Cursive"} fontSize={30}>Explore The Blog World</Typography>
            
            <Button variant='contained' color='secondary'><Link to="/add">Add Blog</Link></Button>
            <Button variant='contained' color='secondary'><Link to="/add">View Blog</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Content
