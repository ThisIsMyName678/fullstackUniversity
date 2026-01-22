import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/home';
import Example from './pages/example';
import WelcomeToJs from './pages/WelcomeToJs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/example' element={<Example />} />
          <Route path='/js' element={<WelcomeToJs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
