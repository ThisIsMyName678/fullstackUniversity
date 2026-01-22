import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Example from './pages/example';
import MongoDb from './pages/MongoDb';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/example' element={<Example />} />
        </Routes>
        <Routes>
          <Route path='/MongoDb' element={<MongoDb />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
