import FamiliaMembro from './FamiliaMembro';

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Anderson" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Micheline" {...props} />
            <FamiliaMembro nome="Ana Beatriz" sobrenome="Matias" />
            <FamiliaMembro nome="Ana Esther" />
        </div>
    );
};