import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import UserInfo from './components/UserInfo';
import Product from './components/Product';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserInfo />}></Route>
      <Route path='/product' element={<Product />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
