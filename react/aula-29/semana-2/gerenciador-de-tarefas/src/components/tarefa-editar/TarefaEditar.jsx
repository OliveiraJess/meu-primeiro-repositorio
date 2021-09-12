import "./tarefaEditar.css"

export default function TarefaEditar(params) {


    return (
        <div className="tarefaEditar">
            <h1>{params.title}</h1>
            <textarea readOnly={params.readOnly}>{params.children}</textarea>
        </div>
    )
}