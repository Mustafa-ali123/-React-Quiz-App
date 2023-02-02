import Box from '@mui/material/Box'
import Buttons from "./Buttons";
import { useState } from "react"
import React from 'react'
import "./App.css";

const Result = (props) => {
    const{ mark, corr , inco}=props
  return (
    <>
      <Box className="container result">
        <h3 className='py-3'>Result</h3>
        <span>Quiz Mark : {mark} </span><br/>
        <span>Correct Answer : {corr} </span><br/>
        <span>Incorrect Answer : {inco}</span><br/>

      </Box>

    </>
  )
}

export default Result
