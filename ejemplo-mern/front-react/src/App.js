import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowProducts from './Product/ShowProducts';
import CompCreateProducts from './Product/CreateProduct';
import CompEditProducts from './Product/EditProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CompShowProducts/>}/>
        <Route path='/create' element={<CompCreateProducts/>}/>
        <Route path='/edit/:id' element={<CompEditProducts/>}/>
      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;