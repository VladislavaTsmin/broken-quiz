import React from "react"
import { Routes, Route } from "react-router"
import Main from "./components/MainPage/index"
import Quiz from "./components/QuizPage"
import Result from "./components/ResultPage"
import { useState } from "react"

function App() {

  const [points, setPoints] = useState(0)
  

  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/quiz/:topic" element={<Quiz setPoints={setPoints}/>}/>
      <Route path="/quiz/:topic/result" element={<Result points={points} setPoints={setPoints}/>}/>
    </Routes>
  )
}

export default App
