import { useCallback, useMemo, useState } from 'react'
import Sum from './Sum';
import Post from './Post';

function App() {
  const [count, setCount] = useState(0);
  const [number,setNumber]=useState(1000);
  // function handleClick(){
  //   console.log("Hello Ji")
  // }
  // function calculatePrime(){
  //   let total=0;
  //   if(total>1)total++;

  //   for(let i=3;i<=number;i++){
  //     for(let j=2;j<=i;j++){
  //       if(i%j==0){total--;
  //         break;
  //       }
  //     }
  //   }
  //   return total;
  // }
const handleClick=useCallback(()=>{
console.log("Handle Click",count);

},[count])
  const prime=useMemo(()=>{
     let total=0;
    if(total>1)total++;

    for(let i=3;i<=number;i++){
      for(let j=2;j<=i;j++){
        if(i%j==0){total--;
          break;
        }
      }
    }
    return total;
  },[number]);
  const obj=useMemo(()=>{
    return {name:"Rohit",age:20}
  },[])
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <Sum number={number}/>
      <h2>Your Current Number Value:{number}</h2>
      <button onClick={()=>{
        setNumber(number+100)
      }}>Increment Number</button>
      <h3>Total Prime Number:{prime}</h3>
      <button onClick={handleClick}>Click</button>
      <Post value={obj}></Post>
    </>
  )
}

export default App;
