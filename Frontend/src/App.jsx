import { useState } from 'react'
import './App.css'
import Forms from './components/Forms'
import Navbar from './components/Navbar'
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Database from './components/Database';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/predict' element={<Forms/>}/>
      <Route path='/database' element={<Database/>}/>

      </Routes>
      {/* <Forms/> */}
    </div>
  )
}

export default App
