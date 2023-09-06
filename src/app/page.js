
"use client"; 
// import React,{useEffect,useState,useMemo} from "react";

// export default function Home(){
//    const [count,setCount]=useState(0);
//    const [number, SetNumber] = useState(1);

//    const factorial = useMemo(() => ExpensiveCalculation(number), [number]);

//     const factNumero = (e) => {
//     console.log(e.target.value);
//     SetNumber(Number(e.target.value));
//   };

//   useEffect(()=>{
//     document.title =`Count:${count}`;

//    },[count]);
//   return(
//        <div>
//            <p> Count:{count}</p>
//            <button onClick={()=>setCount(count+1)}>Increment</button>
//            <input type="text" onChange={factNumero} />
//               {factorial}
//        </div>
     
//   )
// }

// function ExpensiveCalculation(n) {

//     let factorial = 1;

//     for (let i = 1; i <= n; i++) {
//       factorial = factorial * i;
//     }
//     return factorial;
//   }

import React from "react";
import Link from "next/link";

export default function Home(){
  return (
    <div>
      <ul>
        <li>
          <Link href="/about"  className="about">about</Link>
          </li>
          <li>
          <Link href="/contact" className="contact" >contact</Link>
        </li>
        </ul>
    </div>
  )
}

