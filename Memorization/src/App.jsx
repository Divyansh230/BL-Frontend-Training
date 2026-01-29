import { useState } from 'react'
import Sum from './Sum'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Coubter:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <Sum/>
    </>
  )
}

export default App
