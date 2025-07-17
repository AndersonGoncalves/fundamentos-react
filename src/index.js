import './index.css'
import { createRoot } from 'react-dom/client'
import PrimeiroSemJSX, { SegundoComJSX, TerceiroComJSX } from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import { FragmentoComplexo, FragmentoSimples } from './components/basicos/Fragmento'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <div>
    <PrimeiroSemJSX />
    <br />
    <SegundoComJSX />
    <TerceiroComJSX />
    <br />
    <ComParametro
      titulo="Segundo componente"
      aluno="Anderson Gonçalves"
      nota={9.9} />
    <ComParametro
      titulo="Segundo componente"
      aluno="Micheline Gonçalves"
      nota={10.0} />
    <ComParametro
      titulo="Segundo componente"
      aluno="Ana Beatriz Gonçalves"
      nota={10.0} />
    <ComParametro
      titulo="Segundo componente"
      aluno="Ana Esther Gonçalves"
      nota={10.0} />
    <FragmentoSimples tipo="SIMPLES" />
    <FragmentoComplexo tipo="COMPLEXO" />
  </div>
)