import '../src/styles/main.scss';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


// routes files

import Dashboard from './pages/Dashboard';
import Item from './pages/Item';
import Subitem from './pages/Subitem';
import Sidebar from './Components/Sidebar';
import Site from './pages/Site';
import Unit from './pages/Unit';
import Voucher from './pages/Voucher';
import Vendor from './pages/Vendor';
import User from './pages/User';

function App() {
  return (
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/item' element={<Item />} />
          <Route path='/subitem' element={<Subitem />} />
          <Route path='/site' element={<Site />} />
          <Route path='/unit' element={<Unit />} />
          <Route path='/voucher' element={<Voucher />} />
          <Route path='/vendor' element={<Vendor />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </div>

  );
}

export default App;
