import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/home';
import Example from './pages/example';
import Welcome from './pages/welcome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/example' element={<Example />} />
          <Route path='/welcome' element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
