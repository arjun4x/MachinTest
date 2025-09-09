import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import list from './components/list/list';
import Home from './components/Home'
import ListContext from './components/ListContext/ListContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ListContext>
      <Home/>
      </ListContext>

    </>
  )
}

export default App
