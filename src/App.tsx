import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Example from './pages/example';
import WelcomeToNode from './pages/welcomeToNode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/example' element={<Example />} />
        <Route path='/welcomeToNode' element={<WelcomeToNode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
