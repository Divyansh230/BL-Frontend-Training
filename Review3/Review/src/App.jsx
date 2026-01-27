import { useState } from 'react'

import Logic from './Logic'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import D from './components/D'
import E from './components/E'

function App() {
  const [element, setElement] = useState(null)

  const renderComponent = () => {
    if (element === 1) return <A />
    if (element === 2) return <B />
    if (element === 3) return <C />
    if (element === 4) return <D />
    if (element === 5) return <E />
    if(element==='az') return <p>Element not found..!</p>
    return null
  }

  return (
    <>
      <Logic setElement={setElement} func={renderComponent}/>
      {renderComponent()}
    </>
  )
}

export default App
