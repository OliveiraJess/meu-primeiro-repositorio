import './externalCard.css'

export default function ExternalCard({title, finalizadas, total, children}) {
    return (
        <div className="externalCard">

            <div className="externalCardContent">
                <div className="tituloContador">
                    <h1>
                        {title}
                    </h1>
                    <div>
                        {finalizadas?finalizadas:0}/{total?total:0}
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}
