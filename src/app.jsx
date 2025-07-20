import './app.css';
import PrimeiroSemJSX, { SegundoComJSX, TerceiroComJSX } from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import { FragmentoComplexo, FragmentoSimples } from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Famila';

export default (_) =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Card Primeiro componente" color="#080">
                <PrimeiroSemJSX />
                <SegundoComJSX />
                <TerceiroComJSX />
            </Card>

            <Card titulo="Card Com Parâmetro" color="#E94C6F">
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

            <Card titulo="Card de Fragmento Complexo" color="#FF8C00">
                <FragmentoComplexo tipo="COMPLEXO" />
            </Card>

            <Card titulo="Card de Fragmento Simples" color="#E8B71A">
                <FragmentoSimples tipo="SIMPLES" />
            </Card>

            <Card titulo="Exemplo de Card" color="#588C73">
                <Aleatorio min={1} max={18} />
            </Card>

            <Card titulo="Card com filhos" color="#080C6F">
                <Familia sobrenome="Gonçalves" />
            </Card>
        </div>
    </div>;
