import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllwed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqstuvwxyz"

    if (numAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += '!@#$%^&*(){}[]|:;><?/'
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  const copytoClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setselectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])



  return (

    <div className='w-full h-screen' >
      <div className='bg-gray-600 text-center rounded-md max-w-lg mx-auto px-4 py-3 my-8'>
        <h1 className='text-white'>Password Generator</h1>
        <div className='flex overflow-hidden w-full mb-4 rounded-lg'>
          <input type="text"
            value={password}
            className='text-orange-500 text-md font-semibold w-full outline-none px-3'
            readOnly
            ref={passwordRef}
          />
          <button className='bg-blue-500 text-white outline-none px-3 py-1 active:scale-95'
            onClick={copytoClipboard}
          >
            Copy</button>
        </div>



        <div className='flex items-center gap-x-2'>
          <div className='flex overflow-hidden  mb-4 rounded-lg'>
            <input type="range"
              value={length}
              min={6}
              max={100}
              className='text-orange-500 outline-none py-1'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='text-orange-500 mx-2'>Length({length})</label>
          </div>


          <div className='flex overflow-hidden  mb-4 rounded-lg  '>
            <input type="checkbox"
              defaultChecked={numAllowed}
              className='text-orange-500 outline-none px-3 py-1'
              onChange={() => { setNumAllowed(prev => !prev) }}
            />
            <label className='text-orange-500 mx-1'>Numbers</label>
          </div>


          <div className='flex overflow-hidden  mb-4 rounded-lg '>
            <input type="checkbox"
              defaultChecked={charAllowed}
              className='text-orange-500 outline-none px-3 py-1'
              onChange={() => { setCharAllwed(prev => !prev) }

              }
            />
            <label className='text-orange-500 mx-1'>Characters</label>
          </div>
        </div>


      </div>
    </div>

  )
}

export default App
