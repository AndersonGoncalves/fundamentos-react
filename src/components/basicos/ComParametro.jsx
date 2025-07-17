function ComParametro(props) {
    console.log(props);
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <strong>{props.aluno} </strong>
            tem nota:
            <strong> {props.nota}</strong>
            e foi
            <strong> {status} </strong>
        </div>
    );
}

export default ComParametro;