import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <h1>Requisições HTTPS React</h1>
        <p>Teste</p>
      </div>
    </>
  )
}

export default App
