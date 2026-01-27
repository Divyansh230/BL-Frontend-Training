import { useState } from 'react'

function Logic({ setElement ,func}) {
  const [inputValue, setInputValue] = useState('')
  const list = [5,3,4,1, 2]

  const handleSubmit = (e) => {
    e.preventDefault()
    const num = parseInt(inputValue)

    if (list.includes(num)) {
      setElement(num)   
    } else {
      setElement('az')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Logic
