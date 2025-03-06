import { useParams } from "react-router";
import { Link } from "react-router-dom"; // Используйте 'react-router-dom', а не 'react-router'
import "./index.css";
import { GrRotateLeft } from "react-icons/gr";
import { BiHomeAlt } from "react-icons/bi";

export default function Result({ points }) {

    const { topic } = useParams();

    const themes = ["Biologie", "Physik"];


    const numberOfAllPoints = () => {
        return themes.includes(topic) ? "5" : "10";
    };

    return (
        <div>
            <p className="topic">{topic}</p>
            <div className="resultContainer">
                <div className="points">{points} / {numberOfAllPoints()}</div>

                <Link to={`/quiz/${topic}`}>
                    <button className="again">Noch Mal <GrRotateLeft className="rotateIcon"/></button>
                </Link>

                <Link to="/">
                    <button className="toMainPage">Main Page <BiHomeAlt className="homeIcon"/></button>
                </Link>
            </div>
        </div>
    );
}
