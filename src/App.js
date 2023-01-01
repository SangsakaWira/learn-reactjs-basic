import { useState } from "react"

// Function Component
function App() {

  let [data,setData] = useState({
    counter1:1,
    counter2:2,
    counter3:3
  })

  function handleData(event){
    let property = event.target.id
    let value = parseInt(event.target.textContent)
    value++
    setData({
      ...data,
      [property]:value
    })
  }

  // Dirender 1x saja didepan
  return <div>
    <h1 id="counter1" onClick={handleData} >{data.counter1}</h1>
    <h1 id="counter2" onClick={handleData} >{data.counter2}</h1>
    <h1 id="counter3" onClick={handleData} >{data.counter3}</h1>
  </div>
}

export default App;
