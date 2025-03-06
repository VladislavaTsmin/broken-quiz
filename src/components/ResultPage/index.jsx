import { useParams } from "react-router";
import { Link } from "react-router-dom"; // Используйте 'react-router-dom', а не 'react-router'
import "./index.css";
import { GrRotateLeft } from "react-icons/gr";
import { BiHomeAlt } from "react-icons/bi";

export default function Result({ points, setPoints}) {

    const { topic } = useParams();

    const themes = ["Biologie", "Physik"];

    const setPointsNull = () => {
        setPoints(0)
    }


    const numberOfAllPoints = () => {
        return themes.includes(topic) ? "5" : "10";
    };

    return (
        <div className="resultContainer">
            <p className="topic">{topic}</p>
            <div className="contentContainer">
                <div className="points">{points} / {numberOfAllPoints()}</div>

                <Link to={`/quiz/${topic}`}>
                    <button className="again" onClick={()=>{setPointsNull()}}>Noch Mal <GrRotateLeft className="rotateIcon"/></button>
                </Link>

                <Link to="/">
                    <button className="toMainPage" onClick={()=>{setPointsNull()}}>Main Page <BiHomeAlt className="homeIcon"/></button>
                </Link>
            </div>
        </div>
    );
}
