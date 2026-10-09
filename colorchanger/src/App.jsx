import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  function changeColor(nextColor) {
    setColor(nextColor)
  }

  return (
    <div id="buttons" style={{ backgroundColor: color, minHeight: '100vh' }}>
      <ul>
        
        <li><button onClick={() => changeColor('red')}>Red</button></li>
        <li><button onClick={() => changeColor('black')}>Blue</button></li>
        <li><button onClick={() => changeColor('darkblue')}>Dark blue</button></li>
        <li><button onClick={() => changeColor('yellow')}>Yellow</button></li>
      </ul>
    </div>
  )
}

export default App
