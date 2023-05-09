import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';

const Creator = () => {
    const {register,handleSubmit} = useForm ();
    const getval = (val) => {
        alert("Form Submitted")
        console.log(val)
        
    }
  return (
    <div>
      <Typography variant='h2' sx={{flexGrow: 2}} fontFamily={"Cursive"} fontSize={30}a>Add Blogs</Typography>
      <Stack

      component="form"
      sx={{
        marginLeft : '43%',
        marginTop : 10,
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        name='BlogName'
        {...register("BlogName")}
        id="filled-hidden-label-small"
        label = "Name"
        variant="outlined"
      />
      <TextField
        hiddenLabel
        name='Description'
        {...register("Description")}
        id="filled-hidden-label-normal"
        variant="outlined"
        label = "Description"
      />
        <TextField
        hiddenLabel
        name='Author'
        {...register("Author")}
        id="filled-hidden-label-normal"
        variant="outlined"
        label = "Author"
      />
      <Button variant='contained' onClick={handleSubmit(getval)}>Submit</Button>
    </Stack>
    </div>
  )
}

export default Creator
