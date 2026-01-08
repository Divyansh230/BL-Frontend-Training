import React from 'react'

const Sum = React.memo(({number}) => {
    const calSum=()=>{
        let sum=0;
        for(let i=0;i<=number;i++){
            sum+=i;
        }
        return sum;
    }
    const sum=calSum();
  return (
    <div>
      <h1>This our Math library</h1>
      <h2>Sum:{sum}</h2>
    </div>
  )
}
)
export default Sum
