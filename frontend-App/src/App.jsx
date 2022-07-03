import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CreateProducts from './components/CreateProducts'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ShowProducts from './components/ShowProducts'
import EditProduct from './components/EditProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowProducts/>}> </Route>
        </Routes>
        
        <Routes>
          <Route path='/create' element={ <CreateProducts/>}> </Route>
        </Routes>

        <Routes>
          <Route path='/edit/:id' element={ <EditProduct/>}> </Route>
        </Routes>
        
      </BrowserRouter>


    </div>
  )
}

export default App
