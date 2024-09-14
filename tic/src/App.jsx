import { useState } from "react"



function Square(props)
{
  const [value,setValue]=useState(props.value)
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
      <Square value="1" />
      <Square value="2" />
      <Square value="3"/>
    
    </div>
    <div className="board-ui">
    <Square value="4" />
    <Square value="5" />
    <Square value="6" />
   
    </div>
    <div className="board-ui">
    <Square value="7"/>
    <Square value="8"/>
    <Square value="9"/>

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


