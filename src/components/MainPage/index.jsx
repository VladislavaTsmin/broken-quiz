import React from "react";
import "./style.css";
import { Link } from "react-router";

export default function Main () {






    return(
        <div>
            <h1 className="title">Broken Quiz</h1>
            <p className="text">Welche Kategorie werden Sie wählen?</p>
            
            <div className="categories">
                <Link to={`/quiz/Mathe`}>Mathe</Link>
                <Link to={`/quiz/Englisch`}>Englisch</Link>
                <Link to={`/quiz/Physik`}>Physik</Link>
                <Link to={`/quiz/Biologie`}>Biologie</Link>
            </div>

        </div>
    )
}