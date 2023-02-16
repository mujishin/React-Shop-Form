import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InternationalOrders from './Components/InternationalOrders';
import LocalOrders from './Components/LocalOrders';


import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/international-orders' element={<InternationalOrders/>}/>
        <Route path='/local-orders' element={<LocalOrders/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
