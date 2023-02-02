import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button, } from '@mui/material'
import "./App.css";
import Buttons from "./Buttons";
import Result from "./Result";
import Navbar from "./Navbar";
import AddQuiz from "./AddQuiz";

import { useState } from "react"




const Body = () => {
  const [mark, setmark] = useState(0);
  const [show, setshow] = useState(false);
  const [correct, setcorrect] = useState(0);
  const [incorrect, setincorrect] = useState(0);
  const [index, setindex] = useState(0);
  const [value, setvalue] = useState(0);
  const [quizdata, setquizbata] = useState({
    total: 60,
    Quiz: "React Quiz",
    questions:
      [

        {
          question: "Html Stands For _____________",
          options: [
            "Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language",
          ],
          correctAns: "Hypertext markup language",
        }, 
        {
          question: "Css Stands For _______________",
          options: [
            "Hypertext markup language",
            "Java",
            "Ram",
            "Casecading Style Sheet",
          ],
          correctAns: "Casecading Style Sheet",
        },

        {
          question: "Js Stands For __________",
          options: ["Java Style", "Java Script", "Script", "Script Src"],
          correctAns: "Java Script",
        },
        {
          question: "Dom Stands For _____________",
          options: ["Document Object Model", "html", "Css", "Java"],
          correctAns: "Document Object Model",
        },
        {
          question: "Ram Stands For ________________",
          options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
          correctAns: "Random Acccess Memory",
        },
        {
          question: "Rom Stands For __________",
          options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
          ],
          correctAns: "Read Only Memory",
        },


      ]


  });

  const { total, Quiz, questions } = quizdata




  function updata(x) {
console.log(index)
console.log(questions.length)
    if (x == questions[index].correctAns) {

      setmark(mark + 1)
      setcorrect(correct + 1)
    }
    else {
      setincorrect(incorrect + 1)
    }
 setindex(index + 1)
   
if(index+1== questions.length){
  setindex(index )
  alert("Please Check your result")
 

}
    // if (index == 5) {
    //   setindex(index + 1)
    // }
  }


  function showresult() {

    if (index >= 5) {
      if (show == false) {
        setshow(true)
      } else {
        setshow(false)
      }
    } else {
      alert("Please Attempte the all Question")
    }
  }
  
  const getdata = (q, c, arry) => {
    questions.push(

      {
        question: q,
        options: arry,
        correctAns: c,
      },
    )
    console.log(q, c, arry)
  }


  return (
    <>

      <Navbar />

      <Box className="bg-dark header container py-4">
        <Typography variant='h4' className='text-center py-2 '>  {Quiz} </Typography>
        <Typography variant='h6' className='text-center'>Total Question on:{questions.length} | Current Question on:{index + 1}   </Typography>
      </Box>
      <Box>

        <h3 className='text-center py-5 mt-4'>{questions[index].question}</h3>

        <Typography>

          <Buttons data={questions[index].options} alert={updata} ></Buttons>
        </Typography>
        <div className='container'>
          <Button variant='contained' onClick={showresult}
            className='btn1' >Result</Button>
        </div>
      </Box>
      <div >
        {
          show && (<Result mark={mark} corr={correct} className='result' inco={incorrect} />)
        }
      </div>
      <AddQuiz data={getdata} />
    </>
  )
}

export default Body
