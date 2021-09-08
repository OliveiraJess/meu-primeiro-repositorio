import './externalCard.css'

export default function ExternalCard(props) {
    return (
        <div className="externalCard">

            <div className="externalCardContent">
                <h1>
                    {props.children}
                </h1>
                <div className="addTaks">
                    <input></input>
                    <button>Adicionar</button>
                </div>
                <ul>
                    <li>
                        <div className="task">quis ut nam facilis et officia qui</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
