import { useState } from "react"


const RandomColor = () => {
    const [colour,setColour] =  useState("#ba7638")
     const GenerateColour =() =>{
        const arr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]

        let code = arr[randomGen()]+arr[randomGen()]+arr[randomGen()]+arr[randomGen()]+arr[randomGen()]+arr[randomGen()]
        setColour("#"+code);
        console.log(colour);
     }


     const randomGen =()=>{
        return Math.floor(Math.random()*(15 - 0 + 1)) +""
     }
  return (
    <>

    <div className="container" style={{textAlign:"center" , marginTop:"80px"}}>
        <h1>Random Color Generator</h1>

        <div className="colorPallet" style={{height:"400px", width:"100vw", background:colour }}>
            <button onClick={GenerateColour}>Generate Color</button>
         
            <div style={{marginTop:"230px"}}>
              <h1>{`The colour is ${colour}`} </h1> 
            </div>

        </div>
    </div>
    
    
    </>
  )
}

export default RandomColor