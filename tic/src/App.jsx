import { useState } from "react"



function Square()
{
  const [value,setValue]=useState(null)
  const [square,setSquare]=useState(Array(9).fill(null))
  function makeX()
  {
    setValue("X")
  }
  return(
    <>
    <button className="square" onClick={makeX}>{value}</button>
    </>
  )
}
export  function Board()
{
  return(
    <>
    <div className="board-ui">
      <Square  />
      <Square  />
      <Square />
    
    </div>
    <div className="board-ui">
    <Square  />
    <Square  />
    <Square  />
   
    </div>
    <div className="board-ui">
    <Square />
    <Square />
    <Square />

    </div>
    
    </>
  )
  

}

export default function App() {
  return (
    <>
    <Board />
    </>
  )
}


