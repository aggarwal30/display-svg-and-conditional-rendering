import React from "react"
const useEffectBasics=()=>{
    const [count, setcount]=React.useState(0);

    const handleclick=()=>{
        console.log("The value is updated");
    }
    handleclick();
    return(
        <>
         <h2>{count}</h2>
         <button onClick={()=>{setcount(count+1)}}>click me to update</button>
        </>
       

    )


}
export default useEffectBasics;