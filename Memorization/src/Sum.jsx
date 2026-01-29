import React from 'react'

const Sum = React.memo(
    () => {

    const calsum=()=>{
        let s=0;
        for(let i=0;i<=1000;i++)s+=i
        return s;
    }
  return (
    <>
      <h1>This is our Maths Library</h1>
      <h1>Sum:{calsum()}</h1>
    </>
  )
}
)

export default Sum
