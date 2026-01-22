import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/home';
import Example from './pages/example';
import CssPage from './pages/CssPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
          <Route path="/csspage" element={<CssPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
