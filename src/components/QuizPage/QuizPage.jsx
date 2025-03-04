import { useState } from "react"

export default function QuizPage() {

    const [numQuestion, setNumQuestion] = useState(0);

    return (
        <div>
            <div>
                <p>Titel</p>
            </div>
            <div>
                <span>{numQuestion`von 10`}</span>
                <p>Frage</p>
            </div>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <button>Weiter</button>
        </div>
    )
}