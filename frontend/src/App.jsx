import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [emp, setEmp] = useState([])

  useEffect(() => {
    axios.get('/api/emp') 
      .then((res) => {
        setEmp(res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  })

  return (
    <div>
      <h1>
        HELLO WORLD
      </h1>
      {
        emp.map((x) => (
          <div key={x.id}>
            <p> {x.title}</p>
            <p>{x.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App
