import { Link, useParams } from 'react-router-dom';
import { questions } from '../../data/questions';
import { useState } from 'react';
import "./index.css";

export default function Quiz() {

    const { topic } = useParams();
    const [num, setNum] = useState(0);
    const [selectedId, setSelectedId] = useState(null);
    const [points, setPoints] = useState(0)

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
        <div className='container'>
            <div className='textContainer'>
                <p>{num + 1} von {length}</p>
                <p>{points} / {length}</p>
                <p>{topic}</p>
                <div >{quizObj.quiz[num].question}</div>
            </div>


            {quizObj.quiz[num].answers.map(el => <div key={el.id} onClick={() => { setSelectedId(el.id); }} className='answers' style={{ color: selectedId === el.id ? "red" : "black" }}>{el.text}</div>)}



            {num == length - 1 ? (
                <Link to={`/quiz/${topic}/result`} className='toResult'>
                    <button>Ergebniss</button>
                </Link>
            ) : selectedId != null ? (
                <button onClick={() => { nextQuestion() }}
                    className='forward'>Weiter</button>
            ) : null}

        </div>
    )
}


