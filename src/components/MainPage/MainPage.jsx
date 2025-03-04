export default function MainPage () {
    return(
        <div>
            <h1 className="logo">Broken Quiz</h1>
            <p>Welche Kategorie werden Sie wählen?</p>
            
            <div className="categories">
                <div>Mathe</div>
                <div>Englisch</div>
                <div>Physik</div>
                <div>Biologie</div>
            </div>

            <button>Start</button>
        </div>
    )
}