import React from 'react'
import { useState } from "react"
import { Button } from '@mui/material'
import "./App.css";
import Navbar from "./Navbar";

const AddQuiz = (props) => {

  const {data}=props
  const [correct, setcortAns] = useState("");
  const [inpques, setinptques] = useState("");
  const [inpopt, setinpopt] = useState("");
  const [arry, setarry] = useState([]);


  const submit = (e) => {
    e.preventDefault()
    data(inpques,correct,arry)

  }

  const add = (e) => {
    e.preventDefault()
    setarry([...arry, inpopt])
  }

  return (
    <>
<h1 className='container h1 text-center'>Enter the Quiz</h1>
      <div className='container my-5 py-5'>
        <form className='contain container'>
          <div class="mb-3 my-5 ">
            <h5>Enter the Questions :</h5>
            <input type="text" value={inpques} class="form-control" onChange={e => setinptques(e.target.value)} placeholder='Enter the question' id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <h5>Enter the options :</h5>
            <input type="text" value={inpopt} onChange={e => setinpopt(e.target.value)} placeholder='Enter the options' class="form-control" id="exampleInputPassword1" />
            <Button variant='contained' color='success' onClick={add} >Add</Button>
            <h5 className='my-2'>Enter the Correct Answer :</h5>
            <input type="text" onChange={e => setcortAns(e.target.value)} placeholder='Enter the Correct Answer' class="form-control" id="exampleInputPassword1" />

          </div>
          <ol>
            {
              arry.map((x, i) => {
                return (
                  <li key={i}>{x}</li>
                )
              })
            }
          </ol>
          <Button type="submit" onClick={submit} class="btn btn-md  btn-primary mx-4">Submit</Button>
        </form>
      </div>

    </>
  )
}

export default AddQuiz
