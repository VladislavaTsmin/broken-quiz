import { useParams } from "react-router"
import { Link } from "react-router";

export default function Result() {
    const { topic } = useParams();



    return (

        <div>
            <p>{topic}</p>
            <div>
                <Link to={`/quiz/${topic}`}>
                    <button>Noch Mal</button>
                </Link>

                <Link to="/">
                    <button>Main Page</button>
                </Link>

            </div>
        </div>
    )
}