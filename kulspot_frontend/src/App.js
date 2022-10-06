import React from 'react'
import{ Routes, Route, useNavigate} from 'react-router-dom'
import Login from './components/Login'
import Home from './container/Home'

const App = () => {
  return (
    <Route>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Route>
  )
}

export default App