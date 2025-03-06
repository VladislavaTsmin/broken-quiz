import React from "react";
import { Link } from "react-router";
import "./style.css";

export default function Main() {






    return (
        <div className="mainContainer">
                <h1>Broken Quiz</h1>
                
                <p>Welche Kategorie werden Sie wählen?</p>

            <div className="categories">
                <Link to={`/quiz/Mathe`}>Mathe</Link>
                <Link to={`/quiz/Englisch`}>Englisch</Link>
                <Link to={`/quiz/Physik`}>Physik</Link>
                <Link to={`/quiz/Biologie`}>Biologie</Link>
            </div>

        </div>
    )
}