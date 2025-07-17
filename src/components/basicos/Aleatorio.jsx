export default function Aleatorio(props) {
    // const min = props.min;
    // const max = props.max;
    const { min, max } = props;

    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Número Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong> {min} <br />
                <strong>Valor Máximo: </strong> {max} <br />
                <strong>Número Aleatório: </strong> {aleatorio}
            </p>
        </div>
    );
}