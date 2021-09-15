import "./botao.css"
export default function Botao({ children, onclick }) {
    return (
        <button className="botao" onClick={onclick}>
            {children}
        </button>
    );
};
