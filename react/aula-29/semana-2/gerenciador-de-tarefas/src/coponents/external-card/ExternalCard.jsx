import './externalCard.css'

export default function ExternalCard(props) {
    return (
        <div className="externalCard">

            <div className="externalCardContent">
                <h1>
                    {props.title}
                </h1>
                {props.children}
            </div>

        </div>
    )
}
