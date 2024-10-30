import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import { About, Contact, Github, Home, User } from './components'
import { githunInfoLoader } from './components/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>
//       },
//       {
//         path:"contact",
//         element: <Contact/>
//       },
//       {
//         path:"github",
//         element: <Github/>
//       },
//       {
//         path:"user/:userid",
//         element: <User/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      < Route path='' element={<Home/>}/>
      < Route path='about' element={<About/>}/>
      < Route path='contact' element={<Contact/>}/>
      < Route path='user/:userid' element={<User/>}/>
      < Route
       loader ={githunInfoLoader}
       path='github'
       element={<Github/>}
      />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router= {router}/>    
  </StrictMode>,
)