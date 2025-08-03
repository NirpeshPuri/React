
import {BrowserRouter,Routes,Route} from 'react-router-dom'

// REACT FRAGMENT --- parent dinu parxa <> </>
function App() {
  let name="Nirpesh Puri"
  let age = 22;
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home page</h1>}/>
      <Route path="/contact" element={<h1>Contact page</h1>}/>
      <Route path="/About us" element={<h1>About us page</h1>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
