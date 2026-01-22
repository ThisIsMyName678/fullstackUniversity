import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/home';
import Example from './pages/example';
import WelcomeExpress from './pages/WelcomeExpress';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/example' element={<Example />} />
          <Route path='/WelcomeExpress' element={<WelcomeExpress />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
