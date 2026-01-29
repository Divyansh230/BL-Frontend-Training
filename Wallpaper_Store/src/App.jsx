import React from 'react'
import { fetch_phots } from './api/mediaApi'

const App = () => {
  function get_Photos(){
    const phots=fetch_phots()
    console.log(phots)
  }
  return (
    <>
      <div className='h-screen w-full text-white bg-gray-950'>
        <button onClick={get_Photos}>Get Photos</button>
      </div>
    </>
  )
}

export default App
