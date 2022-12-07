import './App.css';
import Home from './components/Home';
import Teams from './components/Teams';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/teams' element={<Teams/>} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
