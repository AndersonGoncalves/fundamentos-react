import { createRoot } from 'react-dom/client'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

const input = <input type="text" placeholder="Digite algo..." />
root.render(
  <div>
    <h1>Olá React!</h1>
    {input}
    <p>testando</p>
  </div>
)




