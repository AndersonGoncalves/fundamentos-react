import PrimeiroSemJSX, { SegundoComJSX, TerceiroComJSX } from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import { FragmentoComplexo, FragmentoSimples } from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';

export default (_) =>
    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="Card Primeiro componente">
            <PrimeiroSemJSX />
            <SegundoComJSX />
            <TerceiroComJSX />
        </Card>

        <Card titulo="Card Com Parâmetro">
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
        </Card>

        <Card titulo="Card de Fragmento Complexo">
            <FragmentoComplexo tipo="COMPLEXO" />
        </Card>

        <Card titulo="Card de Fragmento Simples">
            <FragmentoSimples tipo="SIMPLES" />
        </Card>

        <Card titulo="Exemplo de Card">
            <Aleatorio min={1} max={18} />
        </Card>
    </div>

