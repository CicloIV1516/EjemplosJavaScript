import logo from './logo.svg';
import './App.css';

import CompShowProducts from './Product/ShowProducts';
import CompCreateProducts from './Product/CreateProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />               
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<CompShowProducts/>}/>
        <Route path='/create' element={<CompCreateProducts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
