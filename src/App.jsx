import React from "react"
import { Routes, Route } from "react-router"
import Main from "./components/MainPage/index"
import Quiz from "./components/QuizPage"
import Result from "./components/ResultPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/quiz/:topic" element={<Quiz/>}/>
      <Route path="/quiz/:topic/result" element={<Result/>}/>
    </Routes>
  )
}

export default App
