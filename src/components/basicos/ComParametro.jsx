function ComParametro(props) {
    console.log(props);
    const status = props.nota >= 7 ? 'Aprovado(a)' : 'Recuperação';
    const notaInt = Math.ceil(props.nota);
    return (
        <div>
            <h2>{props.titulo}</h2>
            <strong>{props.aluno} </strong>
            tem nota:
            <strong> {notaInt} </strong>
            e foi
            <strong> {status} </strong>
        </div>
    );
}

export default ComParametro;