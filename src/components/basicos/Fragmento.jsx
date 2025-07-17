import React from "react";

export function FragmentoComplexo(props) {
    return (
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Este é um exemplo de fragmento {props.tipo}.</p>
        </React.Fragment>
    );
}

export function FragmentoSimples(props) {
    return (
        <>
            <h2>Fragmento</h2>
            <p>Este é um exemplo de fragmento {props.tipo}.</p>
        </>
    );
}