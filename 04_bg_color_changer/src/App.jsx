import { useState } from "react"


function App() {

  const [color, setColor] = useState('black')

  return (
    <div className="w-screen h-screen "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2" >

        <div className="flex justify-center gap-3 px-3 py-2 bg-white text-black rounded-3xl">
            <button 
              onClick={ () =>  setColor("red") }
              className="px-8 py-3 rounded-2xl text-white shadow-lg bg-red-600"
              >Red</button>
            
            <button 
              onClick={ () =>  setColor("purple") }
              className="px-8 py-3 rounded-2xl text-white  shadow-lg bg-purple-600"
              
            >purple</button>

            <button 
              onClick={ () =>  setColor("orange") }
              className="px-8 py-3 rounded-2xl text-white  shadow-lg bg-orange-600"
              
            >orange</button>

            <button 
              onClick={ () =>  setColor("maroon") }
              className="px-8 py-3 rounded-2xl text-white  shadow-lg bg-red-950"
              
            >maroon</button>

            <button 
              onClick={ () =>  setColor("black") }
              className="px-8 py-3 rounded-2xl text-white  shadow-lg bg-black"
                          >black</button>

            <button 
              onClick={ () =>  setColor("green") }
              className="px-8 py-3 rounded-2xl text-white  shadow-lg bg-green-600"
                          >green</button>

            <button 
              onClick={ () =>  setColor("blue") }
              className="px-8 py-3 rounded-2xl text-white  shadow-lg bg-blue-600"
                         >blue</button>

        </div>

      </div>
    </div>
  )
}

export default App
