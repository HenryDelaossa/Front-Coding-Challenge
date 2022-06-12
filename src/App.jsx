import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home/Home';
import { Questions } from './Components/Questions/Questions';
import { NotFound } from './Components/NotFound/NotFound';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Questions />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
