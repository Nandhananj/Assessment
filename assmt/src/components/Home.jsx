import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var [value,setvalue] = useState([])
    useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        setvalue(response.data)

    })},[])
  return (
    <div>
      <Typography variant='h4' sx={{flexGrow: 2}} fontFamily={"Cursive"} fontSize={30}></Typography>
          <Table className='Tabclass'>
        <TableHead className='headclass'>
            <TableRow>
                <TableCell> User No: </TableCell>
                <TableCell> Blog id</TableCell>
                <TableCell> Title</TableCell>
                <TableCell> Contents</TableCell>
            </TableRow>
        </TableHead>
        <TableBody >
        {
            value.map((data,index)=>{
                return <TableRow className='bodyclass'>
                    <TableCell>{data.userId}</TableCell>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.title}</TableCell>
                    <TableCell>{data.body}</TableCell>
                </TableRow>
                })
        }
        </TableBody>
      </Table> 
    </div>
  )
}

export default Home
