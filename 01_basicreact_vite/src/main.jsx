import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h2>
        Hiiiii
      </h2>
    </div>
  )
}



// const reactElement = {
//   type: 'a',
//   props: {
//       href : 'http://google.com',
//       target: '_blank'
//   },
//   Childran: 'click on the google..'
// }

const anotherUser = " Anuradha"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',
    target: '_blank'
  },
  'click me for google',
  anotherUser
)


createRoot(document.getElementById('root')).render(
//  <>
//      <App/>
//       <MyApp/>
      


// </>
     reactElement
)
