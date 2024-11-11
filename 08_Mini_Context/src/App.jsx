import './App.css'
import Login from './component/Login'
import Profile from './component/profile'
import UserContextProvider from './Context/UserContextProvider'


function App() {

  return (
  <UserContextProvider>
    <Login />
    <Profile />
  </UserContextProvider>
  )
}

export default App
