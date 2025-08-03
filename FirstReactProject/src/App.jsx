
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// REACT FRAGMENT --- parent dinu parxa <> </>
function App() {
  //let name="Nirpesh Puri"
  //let age = 22;
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/aboutus" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
