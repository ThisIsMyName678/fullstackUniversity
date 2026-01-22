import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/home';
import Example from './pages/example';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/example' element={<Example />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
