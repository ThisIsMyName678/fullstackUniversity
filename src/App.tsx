import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/home';
import Example from './pages/example';
import WelcomeToTs from './pages/welcome_to_ts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/example' element={<Example />} />
          <Route path='/welcome-to-ts' element={<WelcomeToTs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
