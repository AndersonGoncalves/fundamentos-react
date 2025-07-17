import './index.css'
import { createRoot } from 'react-dom/client'
import PrimeiroSemJSX, { SegundoComJSX, TerceiroComJSX } from './components/basicos/Primeiro'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <div>
    <PrimeiroSemJSX />
    <br />
    <SegundoComJSX />
    <TerceiroComJSX />
  </div>
)