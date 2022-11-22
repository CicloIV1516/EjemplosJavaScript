import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowProducts from './Product/ShowProducts';
import CompCreateProducts from './Product/CreateProduct';
import CompEditProducts from './Product/EditProduct';
import CompLogin from './login/login';
import CompShowStore from './store/ShowStore';
import CompShowBuy from './store/ShowBuy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/view' element={<CompShowProducts/>}/>
        <Route path='/create' element={<CompCreateProducts/>}/>
        <Route path='/edit/:id' element={<CompEditProducts/>}/>
        <Route path='/' element={<CompLogin/>}/>
        <Route path='/store' element={<CompShowStore/>}/>
        <Route path='/buy' element={<CompShowBuy/>}/>
      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;