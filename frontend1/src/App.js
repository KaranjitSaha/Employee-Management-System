import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<ListEmployeeComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />
          <Route path="*" element={<ListEmployeeComponent />} />
          <Route path='/add-employee' element={<AddEmployeeComponent/>} />
          <Route path='/edit-employee/:id' element={<AddEmployeeComponent/>} />
        </Routes>
        {/* <ListEmployeeComponent /> */}
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
