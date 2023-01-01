import { useState } from "react";

function App() {

  let [colors, setColors] = useState([])
  
  function handleClick(){
    const randomColors = ['red','green','blue']
    setColors([...colors,{
      nama:randomColors[Math.floor(Math.random()*randomColors.length)]
    }])
    console.log(colors)
  }

  return <>
    {colors.map((color, index) => {
      return (
          <div key={index}>
            <p style={{color:color.nama}}>{color.nama}</p>
          </div>
      )
    })}
          <button onClick={handleClick}>
            Generate Color
          </button>
  </>
}

export default App;
