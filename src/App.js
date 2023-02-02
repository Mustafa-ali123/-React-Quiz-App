import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button, } from '@mui/material'
import "./App.css";
import Buttons from "./Buttons";
import Result from "./Result";
import Navbar from "./Navbar";
import Body from "./Body";
import About from "./About";
import AddQuiz from "./AddQuiz";

import { useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


export default function App() {
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



  const getdata = (q, arry, c) => {
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
      <Router>
        <Routes>
         
        <Route exact path="/" element ={<Body/>}>
          </Route>
          <Route exact path="/about" element ={<About/>}>
          </Route>
        </Routes>
      </Router >

    </>
  )
}
