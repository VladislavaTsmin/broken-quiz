import { Link, useParams } from 'react-router-dom';
import { questions } from '../../data/questions';
import { useState } from 'react';
import "./index.css";

export default function Quiz({setPoints}) {

    const { topic } = useParams();
    const [num, setNum] = useState(0);
    const [selectedId, setSelectedId] = useState(null);
    

    const quizObj = questions.find(obj => obj.title === topic)

    const length = quizObj.quiz.length;

    const summaryCount = () => {
        if (selectedId !== null) {
            const selectedAnswer = quizObj.quiz[num].answers.find(
                answer => answer.id === selectedId
            );
            if (selectedAnswer && selectedAnswer.isRight) {
                setPoints(prevPoints => prevPoints + 1);
            }
        }
    };

    const nextQuestion = () => {
        summaryCount();
        setSelectedId(null);
        setNum(prevNum => prevNum + 1);
    };


    return (
        <div className='quizContainer'>

            <p className='topic'>{topic}</p>

            <div className='textContainer'>
                <p>{num + 1} von {length}</p>
                <p>Frage: </p>
                <div>{quizObj.quiz[num].question}</div>
            </div>


            <div className='answersContainer'>
                {quizObj.quiz[num].answers.map(el => <button key={el.id} onClick={() => { setSelectedId(el.id); }} className='answers' style={{
                    backgroundColor: selectedId === el.id ? "#4128AC" : "#BEB7DC",
                    color: selectedId === el.id ? "white" : "black"
                }}>{el.text}</button>)}
            </div>


            {num == length - 1 && selectedId != null ? (
                <Link to={`/quiz/${topic}/result`}>
                    <button className='result'>Ergebniss</button>
                </Link>
            ) : selectedId != null ? (
                <button onClick={() => { nextQuestion() }}
                    className='forward'>Weiter</button>
            ) : null}
                
        </div>
    )
}


