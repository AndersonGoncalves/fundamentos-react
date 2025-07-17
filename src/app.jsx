import PrimeiroSemJSX, { SegundoComJSX, TerceiroComJSX } from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import { FragmentoComplexo, FragmentoSimples } from './components/basicos/Fragmento';

export default (_) =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <PrimeiroSemJSX />
        <SegundoComJSX />
        <TerceiroComJSX />
        <ComParametro
            titulo="Primeiro componente"
            aluno="Anderson Gonçalves"
            nota={9.9} />
        <ComParametro
            titulo="Primeiro componente"
            aluno="Micheline Gonçalves"
            nota={10.0} />
        <ComParametro
            titulo="Primeiro componente"
            aluno="Ana Esther Gonçalves"
            nota={10.0} />
        <ComParametro
            titulo="Segundo componente"
            aluno="Ana Esther Gonçalves"
            nota={10.0} />
        <FragmentoSimples tipo="SIMPLES" />
        <FragmentoComplexo tipo="COMPLEXO" />
    </div>

