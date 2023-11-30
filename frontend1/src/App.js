import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<LoginComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />
          <Route path="*" element={<ListEmployeeComponent />} />
          <Route path='/add-employee' element={<AddEmployeeComponent/>} />
          <Route path='/edit-employee/:id' element={<AddEmployeeComponent/>} />
          <Route path="/login" element={LoginComponent} />
        </Routes>
        {/* <ListEmployeeComponent /> */}
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;

// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import FooterComponent from './components/FooterComponent';
// import HeaderComponent from './components/HeaderComponent';
// import ListEmployeeComponent from './components/ListEmployeeComponent';
// import AddEmployeeComponent from './components/AddEmployeeComponent';
// import LoginComponent from './components/LoginComponent';

// function App() {
//   return (
//     <div>
//       <Router>
//         <HeaderComponent />
//         <Routes>
//           <Route path="/login" element={<LoginComponent />} />
//           <Route
//             path="/"
//             element={
//               <Routes>
//                 <Route index element={<ListEmployeeComponent />} />
//                 <Route path="employees" element={<ListEmployeeComponent />} />
//                 <Route path="*" element={<ListEmployeeComponent />} />
//                 <Route path="add-employee" element={<AddEmployeeComponent />} />
//                 <Route path="edit-employee/:id" element={<AddEmployeeComponent />} />
//               </Routes>
//             }
//           />
//         </Routes>
//         <FooterComponent />
//       </Router>
//     </div>
//   );
// }

// export default App;
