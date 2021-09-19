import './externalCard.css'

export default function ExternalCard({ title, children, finalizadas, total }) {
    return (
        <div className="externalCard">

            <div className="externalCardContent">
                <div>
                    <h1>
                        {title}
                    </h1>
                    <span>
                        {finalizadas ? finalizadas : 0}/{total ? total : 0}
                    </span>
                </div>
                {children}
            </div>

        </div>
    )
}
